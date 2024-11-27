from elasticsearch import Elasticsearch

es = Elasticsearch(
    ["https://localhost:9200"],  # URL of the Elasticsearch instance
    basic_auth=("elastic", "VveuHxqi2inw=SlGgGTc"),  # Replace with the correct credentials
    verify_certs=False  # Disable certificate verification for local testing
)

def create_index(index_name):
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name, body={
            "mappings": {
                "properties": {
                    "title": {"type": "text", "analyzer": "standard"},
                    "author": {"type": "text", "analyzer": "standard"},
                    "genre": {"type": "keyword"},
                    "publication_year": {"type": "date"},
                    "language": {"type": "keyword"},
                    "rating": {"type": "float"}
                }
            }
        })
