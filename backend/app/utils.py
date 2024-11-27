from elasticsearch import Elasticsearch

# Elasticsearch Client
es = Elasticsearch(['http://localhost:9200'])

def bulk_index_books(index_name, books):
    """
    Bulk index books into Elasticsearch.
    """
    actions = [
        {
            "_index": index_name,
            "_id": book["id"],
            "_source": book,
        }
        for book in books
    ]
    response = es.bulk(index=index_name, body=actions)
    return response

def search_books_in_elasticsearch(index_name, query):
    """
    Search books in Elasticsearch using a multi-match query.
    """
    response = es.search(index=index_name, body={
        "query": {
            "multi_match": {
                "query": query,
                "fields": ["title^2", "author", "genre"]
            }
        }
    })
    return response.get('hits', {}).get('hits', [])
