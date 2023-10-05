import unittest
import grpc
from weather_analyzer.weather_analyzer_pb2_grpc import AuthServiceServicer
from weather_analyzer import app  # Import your Flask app
from concurrent import futures
from grpc import insecure_channel


class TestAuthServiceServicer(unittest.TestCase):
    def setUp(self):
        # Set up a test gRPC server
        self.server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        self.channel = insecure_channel(
            'localhost:50052')  # Use the gRPC server's port
        self.stub = AuthServiceStub(self.channel)

        # Start the gRPC server
        weather_analyzer_pb2_grpc.add_AuthServiceServicer_to_server(
            AuthServiceServicer(), self.server)
        self.server.add_insecure_port('[::]:50052')
        self.server.start()

    def tearDown(self):
        # Clean up resources if needed
        self.server.stop(None)

    def test_isAccessTokenValid(self):
        # Write tests for your AuthServiceServicer methods
        # For example:
        request = weather_analyzer_pb2_grpc.TokenValidationRequest(
            token="your_jwt_token_here")
        response = self.stub.isAccessTokenValid(request)
        self.assertTrue(response.valid)


if __name__ == '__main__':
    unittest.main()
