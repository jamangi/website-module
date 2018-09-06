from flask import Flask, request, jsonify, abort
from flask_cors import CORS
import os
from models import storage

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config["JSONIFY_PRETTYPRINT_REGULAR"] = True
cors = CORS(app, resources={r"/*": {"origins": "0.0.0.0"}})

@app.route('/')
def echo():
    return jsonify({"status": "ok"})

@app.route('/lessons/')
def all_lessons():
    '''
        Return all lessons
    '''
    all_lessons = storage.all()
    lesson_dict = {}
    for k, v in all_lessons.items():
        lesson_dict[k] = v.to_dict()
    return jsonify(lesson_dict)

@app.route('/lessons/<int:number>')
def get_lesson(number):
    '''
        Return the specific lesson
    '''
    lesson = storage.get_by_num(number)
    if lesson is None:
        abort(404)
    return jsonify(lesson.to_dict())

@app.errorhandler(404)
def data_not_found_404(e):
    '''
        This will return 404 not found error.
    '''
    return jsonify({"error": "Not found"}), 404

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    app.run(port = 5000)