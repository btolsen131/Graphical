from rest_framework.decorators import api_view
from rest_framework.response import Response
from graphicalAPI.models import Tip 
from graphicalAPI.serializers import TipSerializer

@api_view(["GET"])
def getRandomTip(request):
    tip = Tip.objects.order_by('?').first()
    serializer = TipSerializer(tip, many=False)
    return Response(serializer.data)