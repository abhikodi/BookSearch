from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    genre = models.CharField(max_length=100)
    publication_year = models.IntegerField()
    language = models.CharField(max_length=50)
    rating = models.FloatField()

    def __str__(self):
        return self.title

class Review(models.Model):
    book = models.ForeignKey(Book, related_name='reviews', on_delete=models.CASCADE)
    content = models.TextField()
    rating = models.IntegerField()
    helpful_votes = models.IntegerField(default=0)

    def __str__(self):
        return f"Review for {self.book.title}"

class Wishlist(models.Model):
    user = models.CharField(max_length=100)  # Simulates user management
    name = models.CharField(max_length=100)
    books = models.ManyToManyField(Book)

    def __str__(self):
        return self.name
