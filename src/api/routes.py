"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/post', methods=["POST"])
def add_post():
    request_body = request.get_json(force=True)
    post = request_body.get("post")
    title = request_body.get("title")

    return jsonify(request_body), 200

@api.route('/post', methods=["GET"])
def get_posts():
    post = Post.query.all()
    all_post = list(map(lambda x: x.serialize(), post))
    return jsonify(all_post), 200

@api.route('/post/<int:id>', methods=["GET"])
def get_post(id):
    post = Post.query.filter_by(id=id).first()
    return jsonify(post.serialize()), 200
