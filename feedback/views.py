from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .ai_service import analyze_text
import json
from django.db.models import Q

from .models import Feedback
from .serializers import FeedbackSerializer
# Create your views here.
@api_view(['GET'])
def get_feedback(request):
    feedback = Feedback.objects.all()
    serializer = FeedbackSerializer(feedback, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_feedback(request):
    query = request.GET.get('q', '')

    feedback = Feedback.objects.filter(
        Q(title__icontains=query) |
        Q(name__icontains=query) |
        Q(message__icontains=query)
    )

    serializer = FeedbackSerializer(feedback, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_feedback(request):

    serializer = FeedbackSerializer(data=request.data)

    if serializer.is_valid():
        feedback = serializer.save()

        #  AI CALL
        ai_result = analyze_text(feedback.message)

        # SAVE AI RESULT
        feedback.sentiment = ai_result.get("sentiment", "Neutral")
        feedback.emotion = ai_result.get("emotion", "Neutral")
        feedback.save()

        return Response({
            "data": FeedbackSerializer(feedback).data,
            "ai": ai_result
        })

    return Response(serializer.errors)

@api_view(['DELETE'])
def delete_feedback(request, pk):
    try:
        feedback = Feedback.objects.get(id=pk)
        feedback.delete()
        return Response({"message": "Deleted successfully"})
    except Feedback.DoesNotExist:
        return Response({"error": "Not found"}, status=404)