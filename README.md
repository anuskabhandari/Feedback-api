#  Django Feedback API (Live Project)

A simple and deployed Django REST Framework API that allows users to create, view, and search feedback.  
This project is hosted on Render and is accessible online.

 Live URL: https://feedback-api-dsex.onrender.com

---

##  Features

-  Add Feedback (POST API)
-  Get All Feedback (GET API)
-  Search Feedback by keyword
-  Simple validation system
-  Fully deployed backend API

---

##  Tech Stack

- Python 
- Django 
- Django REST Framework 
- Gunicorn (Production server)
- Render (Deployment platform)

---

##  Live API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/feedback/ | Get all feedback |
| POST | /api/feedback/add/ | Create new feedback |
| GET | /api/feedback/search/?q=keyword | Search feedback |

---

##  Live API Base URL


https://feedback-api-dsex.onrender.com


---

##  Sample POST Request

json
{
    "name": "Anuska",
    "message": "This is a great project"
}
## Search Example
https://feedback-api-dsex.onrender.com/api/feedback/search/?q=great
 Installation (For Local Setup)
# Clone repository
git clone https://github.com/anuskabhandari/Feedback-api.git

# Go to project folder
cd feedback_project

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
