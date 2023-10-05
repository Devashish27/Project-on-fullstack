from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_pyfile('config.py')

# Configuration
# app.config['SECRET_KEY'] = '123456'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@localhost/users'

# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define routes


@app.route('/')
def home():
    return 'Hello, World!'


@app.route('/about')
def about():
    return 'This is the about page.'


if __name__ == '__main__':
    app.run(debug=True)
