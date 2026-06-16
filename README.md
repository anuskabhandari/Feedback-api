# AI Feedback Analysis System

A full-stack Feedback Analysis Platform built with Django REST Framework and React. Users can submit feedback, perform live searches, filter results, and receive AI-powered sentiment and emotion analysis using Groq AI.

## Live Demo

**Frontend:** https://feedback-api-topaz.vercel.app

**Backend API:** https://feedback-api-dsex.onrender.com

---

## Features

### Feedback Management

* Add new feedback
* View all feedback
* Delete feedback
* Search feedback by keyword
* Real-time search functionality
* Sentiment-based filtering

### AI Analysis

* Automatic Sentiment Analysis

  * Positive
  * Negative
  * Neutral
* Emotion Detection

  * Happy
  * Sad
  * Angry
  * Excited
  * Frustrated
  * Neutral

### Frontend Features

* Responsive React UI
* Live search without page refresh
* Dynamic feedback updates
* Clean and user-friendly interface

### Backend Features

* Django REST Framework APIs
* SQLite database
* RESTful architecture
* Environment variable configuration
* API validation

### DevOps & Deployment

* GitHub Actions CI/CD
* Automated testing workflow
* Render deployment
* Vercel deployment
* Environment variable management

---

## Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* Gunicorn
* WhiteNoise

### Frontend

* React.js
* Axios
* JavaScript
* HTML
* CSS

### AI

* Groq API
* LLM-powered sentiment and emotion analysis

### Deployment

* Render (Backend)
* Vercel (Frontend)
* GitHub Actions (CI/CD)

---

## Project Structure

```text
feedback-project/
│
├── feedback/
│   ├── ai_service.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── tests.py
│
├── feedback_project/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── feedback-ui/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .github/workflows/
│   └── tests.yml
│
├── requirements.txt
├── manage.py
└── README.md
```

---

## API Endpoints

### Get All Feedback

```http
GET /api/feedback/
```

### Add Feedback

```http
POST /api/feedback/add/
```

Sample Request:

```json
{
  "title": "Food Review",
  "name": "Anuska",
  "message": "The food was amazing and tasty.",
  "rating": 5
}
```

### Search Feedback

```http
GET /api/feedback/search/?q=happy
```

### Delete Feedback

```http
DELETE /api/feedback/delete/<id>/
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/anuskabhandari/Feedback-api.git
cd feedback-project
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

Windows:

```bash
venv\Scripts\activate
```

Mac/Linux:

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Create .env File

```env
SECRET_KEY=your_secret_key
DEBUG=True
GROQ_API_KEY=your_groq_api_key
```

### Run Migrations

```bash
python manage.py migrate
```

### Start Backend

```bash
python manage.py runserver
```

### Start Frontend

```bash
cd feedback-ui
npm install
npm start
```

---

## CI/CD

GitHub Actions automatically:

* Installs dependencies
* Runs Django tests
* Validates project configuration
* Helps maintain code quality

Workflow Location:

```text
.github/workflows/tests.yml
```

---

## Future Improvements

* User Authentication
* Dashboard Analytics
* Feedback Export (CSV/PDF)
* Charts and Visualizations
* Admin Panel Enhancements
* Docker Support
* PostgreSQL Integration

---

## Author

**Anuska Bhandari**

## License

This project is created for learning, portfolio, and educational purposes.

---

## License

This project is created for learning, portfolio, and educational purposes.
