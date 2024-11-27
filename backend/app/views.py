from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book, Review, Wishlist
from .serializers import BookSerializer, ReviewSerializer, WishlistSerializer
from .elastic import es

def homepage(request):
    return HttpResponse("Welcome to the Book Recommendation Engine!")

@api_view(['GET'])
def search_books(request):
    query = request.GET.get("query", "")
    try:
        if not query:
            response = es.search(index="books", body={
                "query": {
                    "match_all": {}
                }
            })
        else:
            response = es.search(index="books", body={
                "query": {
                    "multi_match": {
                        "query": query,
                        "fields": ["title^2", "author", "genre"]
                    }
                }
            })
        books = [hit["_source"] for hit in response['hits']['hits']]
        return JsonResponse(books, safe=False)
    except Exception as e:
        return JsonResponse({"error": f"Elasticsearch error: {str(e)}"}, status=500)


@csrf_exempt
@api_view(['POST'])
def add_to_wishlist(request):
    data = request.data
    wishlist = Wishlist.objects.get_or_create(user=data['user'], name=data['name'])[0]
    wishlist.books.add(Book.objects.get(id=data['book_id']))
    wishlist.save()
    return Response({"message": "Book added to wishlist."})

@csrf_exempt
@api_view(['POST'])
def submit_review(request):
    data = request.data
    review = Review.objects.create(
        book=Book.objects.get(id=data['book_id']),
        content=data['content'],
        rating=data['rating']
    )
    return Response({"message": "Review submitted."})

@api_view(['GET'])
def wishlist(request):
    try:
        user_wishlist = Wishlist.objects.filter(user=request.user)  # Adjust logic for user
        serialized = WishlistSerializer(user_wishlist, many=True)
        return JsonResponse(serialized.data, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

