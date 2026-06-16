from django.test import TestCase

# Create your tests here.
import pytest
from rest_framework.test import APIClient
from django.urls import reverse

@pytest.mark.django_db
def test_feedback_create_success():
    client = APIClient()

    data = {
        "name": "Rekha",
        "email": "rekha@test.com",
        "message": "Nice app",
        "rating": 5
    }

    url = reverse("feedback-list")
    response = client.post(url, data, format="json")

    assert response.status_code in [200, 201]


@pytest.mark.django_db
def test_feedback_create_fail():
    client = APIClient()

    data = {
        "name": "",
        "email": "wrong-email",
        "message": "",
        "rating": 10
    }

    url = reverse("feedback-list")
    response = client.post(url, data, format="json")

    assert response.status_code == 400