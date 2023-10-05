import sys
print(sys.path)


if __name__ == '__main__':
    from concurrent import futures
    import grpc
    import weather_analyzer_pb2_grpc
    from grpc import AuthService
    from pyflask import app

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    weather_analyzer_pb2_grpc.add_AuthServiceServicer_to_server(
        AuthService(), server)
    server.add_insecure_port('[::]:50052')  # Choose a port for gRPC server
    server.start()
    app.run(port=8000)  # Start Flask app on port 8000
