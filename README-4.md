
# Book Recommendation Engine

This project is a full-stack application that provides a book recommendation engine using Django, React, and Elasticsearch.

---

## Features
- Full-text search with typo tolerance
- Faceted navigation for genre, language, publication year, and ratings
- Wishlist and book reviews
- Interactive book previews

---

## Prerequisites
1. Python 3.8 or above
2. Node.js (latest LTS version recommended)
3. Elasticsearch 7.x or 8.x

---

## Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd book_recommendation/backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Apply database migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. Start the backend server:
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://127.0.0.1:8000`.

---

## Elasticsearch Setup
1. Download Elasticsearch from [elastic.co](https://www.elastic.co/downloads/elasticsearch).

2. Start Elasticsearch:
   ```bash
   # For Linux/Mac
   ./bin/elasticsearch

   # For Windows
   bin\elasticsearch.bat
   ```

3. Verify Elasticsearch is running by visiting:
   ```
   http://localhost:9200
   ```

4. Populate Elasticsearch with book data:
   ```bash
   curl -X POST "http://localhost:9200/books/_bulk" -H 'Content-Type: application/json' --data-binary @books.json
   ```

---

## Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd book_recommendation/frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`.

---

## Development Workflow
- **Backend**: Use Django's `runserver` for development.
- **Frontend**: Use React's `npm start` for live reloading.
- **Elasticsearch**: Ensure the Elasticsearch server is running for full functionality.

---

## Project Structure
```plaintext
book_recommendation/
├── backend/                  # Django backend
│   ├── app/                  # Django app for models, views, serializers
│   ├── config/               # Django project settings
│   └── manage.py             # Django CLI entry point
├── frontend/                 # React frontend
│   ├── public/               # Static assets
│   ├── src/                  # React components and pages
│   ├── package.json          # Frontend dependencies
│   └── webpack.config.js     # Webpack configuration
├── elasticsearch/            # Elasticsearch data files
│   └── books.json            # Sample book data for indexing
└── README.md                 # Project documentation
```

---

## Notes
- Replace the default `SECRET_KEY` in `settings.py` for production.
- Ensure Elasticsearch is running before starting the project.

---

