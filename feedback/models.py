from django.db import models

class Feedback(models.Model):

    RATING_CHOICES = [
        (1, "1 Star"),
        (2, "2 Stars"),
        (3, "3 Stars"),
        (4, "4 Stars"),
        (5, "5 Stars"),
    ]

    title = models.CharField(max_length=255)
    name = models.CharField(max_length=100)
    message = models.TextField()
    rating = models.IntegerField(choices=RATING_CHOICES)

    #  AI FIELDS (IMPORTANT)
    sentiment = models.CharField(max_length=50, blank=True, null=True)
    emotion = models.CharField(max_length=50, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title