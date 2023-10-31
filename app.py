from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'This is the data you requested'}
    response = jsonify(data)
    response.headers['Content-Type'] = 'application/json'  # Set the Content-Type header
    print(response.get_data(as_text=True))  
    return response

if __name__ == '__main__':
    app.run(debug=True)