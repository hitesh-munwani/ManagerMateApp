from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define a route for the root URL
@app.route('/')
def home():
    return "Welcome to the Flask App!"

# Define the login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Replace this logic with your actual login verification
    if email == "test@example.com" and password == "password123":
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
