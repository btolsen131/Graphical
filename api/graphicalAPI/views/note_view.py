from rest_framework.decorators import api_view
from rest_framework.response import Response
from graphicalAPI.models import NoteNode
from graphicalAPI.serializers import NoteNodeSerializer

@api_view(["GET"])
def getAllNotes(request):
    notes = NoteNode.objects.all()
    serializer = NoteNodeSerializer(notes, many=True)
    return Response(serializer.data)

