from django.contrib import admin
from .models import Studio, Genre, Jeux

# Register your models here.
admin.site.register(Studio)
admin.site.register(Genre)
admin.site.register(Jeux)
