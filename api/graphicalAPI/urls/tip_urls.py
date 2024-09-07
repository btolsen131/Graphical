from django.urls import path
from graphicalAPI.views.tip_view import getRandomTip

urlpatterns = [
    path('random', getRandomTip, name='randomTip'),
]
