from flask import Flask, request, jsonify

app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"

@app.route('/members', methods=["GET"])
def members():
    myString = jsonify("please work")
    return myString

# if __name__ == '__main__':
#     app.run(debug=True)