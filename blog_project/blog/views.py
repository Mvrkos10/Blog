from rest_framework import generics
from .models import Post
from .serializers import PostSerializer
from django.http import HttpResponse

class PostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


def home(request):
    return HttpResponse("Bienvenido a la API del blog")