import http.server
import socketserver
import os

PORT = 8000
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))  # Volta para a pasta QA

os.chdir(ROOT_DIR)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor rodando em http://localhost:{PORT}/testes")
    httpd.serve_forever()