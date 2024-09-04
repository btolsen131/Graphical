from django.urls import path
from graphicalAPI.views.note_view import getAllNotes

urlpatterns = [
    path('', getAllNotes, name='allNotes'),
]
