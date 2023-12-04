from django.http import HttpResponse
from django.shortcuts import render
from .models import Studio, Genre, Jeux
from django.views import generic
from django.shortcuts import get_object_or_404

# Create your views here.
def index(request):
    """Vieux function for home page of site."""

    #generate counts of some of the main objects
    num_jeux = Jeux.objects.all().count()

    # The 'all()' is implied by default.
    num_studios = Studio.objects.all().count()

    context = {
        'num_jeux': num_jeux,
        'num_studios': num_studios,
    }

    #render the html template index.html with the data in the context variable
    return render(request, 'index.html', context=context)

class JeuxListView(generic.ListView):
    model = Jeux
    context_object_name = 'jeu_list' #your own name for the list as a template variable
    template_name = 'jeux/my_arbitrary_template_name_list.html'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get the context
        context = super(JeuxListView, self).get_context_data(**kwargs)
        # Create any data and add it to the context
        context['some_data'] = 'This is just some data'
        return context
    
