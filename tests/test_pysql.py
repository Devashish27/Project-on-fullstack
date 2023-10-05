import unittest
from weather_analyzer import db
from weather_analyzer.pysql import User


class TestDB(unittest.TestCase):
    def setUp(self):
        # Set up your test database here (create tables, etc.)
        pass

    def tearDown(self):
        # Clean up your test database here (drop tables, etc.)
        pass

    def test_user_model(self):
        # Write test cases for your database models
        pass

    # Add more test cases for other models and database operations


if __name__ == '__main__':
    unittest.main()
