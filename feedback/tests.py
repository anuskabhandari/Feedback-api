from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from .models import Feedback

class FeedbackTestCase(TestCase):
    def test_create_feedback(self):
        feedback = Feedback.objects.create(
            title="Test",
            name="Rekha",
            message="Hello world",
            rating=5
        )
        self.assertEqual(feedback.title, "Test")