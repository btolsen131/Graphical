from django.db import models
from django.contrib.auth.models import User

class NoteNode(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.TextField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    children = models.ManyToManyField('self', symmetrical=False, blank=True)

    def __str__(self):
        return str(self.title)


