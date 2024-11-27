from django.urls import path
from .views import search_books, add_to_wishlist, submit_review, wishlist

urlpatterns = [
    path('search_books/', search_books, name='search_books'),
    path('add_to_wishlist/', add_to_wishlist, name='add_to_wishlist'),
    path('submit_review/', submit_review, name='submit_review'),
    path('wishlist/', wishlist, name='wishlist'),

]
