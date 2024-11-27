from django.contrib import admin
from django.urls import path, include
from app.views import homepage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
    path('', homepage, name='homepage'),  # Add this line for the homepage
]
