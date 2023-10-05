import grpc
from .weather_analyzer_pb2_grpc import AuthServiceServicer
from .weather_analyzer_pb2_grpc import add_AuthServiceServicer_to_server
from pyflask import app
import jwt
# Import the weather_analyzer_pb2 module
import weather_analyzer_pb2_grpc


class AuthService(weather_analyzer_pb2_grpc.AuthServiceServicer):
    def isAccessTokenValid(self, request, context):
        try:
            jwt.decode(request.token, app.config['SECRET_KEY'])
            return weather_analyzer_pb2_grpc.TokenValidationResponse(valid=True)
        except jwt.ExpiredSignatureError:
            return weather_analyzer_pb2_grpc.TokenValidationResponse(valid=False, error='Token expired')
        except jwt.DecodeError:
            return weather_analyzer_pb2_grpc.TokenValidationResponse(valid=False, error='Invalid token')
