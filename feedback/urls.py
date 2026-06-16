from django.urls import path
from .views import get_feedback , post_feedback , search_feedback , delete_feedback
urlpatterns = [
    path('feedback/', get_feedback),
    path('feedback/add/', post_feedback),
     path('feedback/search/', search_feedback),
     path('feedback/delete/<int:pk>/', delete_feedback),

]
