from flask import Flask, request, jsonify
from pysql import db, User
import jwt
from datetime import datetime, timedelta
from pyflask import app  # Import the Flask app


@app.route('/authenticate', methods=['POST'])
def authenticate():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()

    if user and user.password == password:
        # Generate JWT token
        token = jwt.encode({'username': username, 'exp': datetime.utcnow(
        ) + timedelta(hours=1)}, app.config['SECRET_KEY'])
        return jsonify({'success': True, 'access_token': token}), 200

    return jsonify({'success': False, 'error': 'Incorrect username or password'}), 401
