from django.shortcuts import render
import os
import config

from dotenv import load_dotenv
load_dotenv(verbose=True)

def landingpage(request):
    username = os.getenv("USERNAME")
    course = os.getenv("COURSE")
    print(username, course)
    return render(request, "homepage.html", {"username": username, "course": course})