from django.contrib import admin
# Register your models here.
from .models import Feedback
#admin.site.register(Feedback)
@admin.register(Feedback)
class Feedback(admin.ModelAdmin):
    list_display = ['id','name','rating','message','created_at']
    search_fields = ['name']
    list_filter = ['rating']