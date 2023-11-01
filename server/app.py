from flask import Flask, jsonify
from flask_cors import CORS
import subprocess

from time import sleep

from ledControl import toggle_led

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'This is the data you requested'}
    # response = jsonify(data)
    # response.headers['Content-Type'] = 'application/json'  # Set the Content-Type header
    # print(response.get_data(as_text=True))  
    return data

@app.route('/api/backend-action', methods=['GET'])
def perform_backend_action():
    toggle_led()
    print("LED is ON")
    # cmd = "sudo python3 -c \"from ledControl import toggle_led; toggle_led()\""  # Adjust the path as needed

    # Run the script with sudo privileges
    # subprocess.run(cmd, shell=True)

    return jsonify({'message': 'Backend action performed'})

if __name__ == '__main__':
    app.run(debug=True)