from django.urls import path
from . import views


urlpatterns = [
    path('note/',views.NoteListCreate.as_view(),name='create_note'),
    path('note/delete/<int:pk>/',views.NoteDelete.as_view(),name='delete_note'),
]