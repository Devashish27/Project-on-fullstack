from flask import Flask
from pysql import db

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ABCDEFGH'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@localhost/users'
db.init_app(app)
