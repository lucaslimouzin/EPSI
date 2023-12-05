from .import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('jeux/', views.JeuxListView.as_view(), name='jeux'),
    #path('jeux/<int:pk>', views.JeuxDetailView.as_view(), name='jeu-detail'),
]