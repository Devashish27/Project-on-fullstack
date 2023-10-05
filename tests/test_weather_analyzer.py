import unittest
from weather_analyzer.pyflask import app


class TestWeatherAnalyzerAPI(unittest.TestCase):
    def setUp(self):
        # Set up a test client for the Flask app
        self.client = app.test_client()

    def tearDown(self):
        # Clean up resources if needed
        pass

    def test_api_weather(self):
        # Test the /api/weather endpoint
        response = self.client.get('/api/weather?city=london')
        data = response.get_json()
        self.assertEqual(response.status_code, 200)
        self.assertTrue(data['success'])
        self.assertIn('temperature', data)
        self.assertIn('label', data)
        # Add more test cases for different temperature ranges and labels


if __name__ == '__main__':
    unittest.main()
