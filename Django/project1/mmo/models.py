import uuid
from django.db import models
from django.urls import reverse

# Create your models here.

class Genre(models.Model):
    """Model representing a mmo genre"""
    nom = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.nom

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('genre-detail', args=[str(self.id)])
    
class Studio(models.Model):
    """Model representing a Studio"""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('author-detail', args=[str(self.id)])

class Jeux(models.Model):
    """Model representing jeux"""
    title = models.CharField(max_length=200)
    plateforme = models.CharField(max_length=100)
    studio = models.ForeignKey('Studio', on_delete=models.RESTRICT, null=True)
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(
        Genre, help_text="Select a genre for this mmo")
    
    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a particular studio instance."""
        return reverse('jeux-detail', args=[str(self.id)])