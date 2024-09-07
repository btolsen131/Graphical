from itsdangerous import Serializer
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import NoteNode, Tip
from django.contrib.auth.models import User

class NoteNodeSerializer(ModelSerializer):
    class Meta:
        model = NoteNode
        fields = '__all__'

class UserSerializer(ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['username','isAdmin', 'id' ,'email', 'name','_id']

    def get_isAdmin(self,obj):
        return obj.is_staff

    def get__id(self,obj):
        return obj.id

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class TipSerializer(ModelSerializer):
    class Meta:
        model = Tip 
        fields = '__all__'