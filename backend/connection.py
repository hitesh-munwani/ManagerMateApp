from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector  # Import MySQL connector

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database connection configuration
db_config = {
    'user': 'root',
    'password': '687526',
    'host': 'localhost',  # Change if your MySQL is hosted elsewhere
    'database': 'management',
}

# Function to check user credentials from MySQL
def verify_user(email, password):
    try:
        # Establish database connection
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)
        
        # SQL query to fetch user by email and password
        query = "SELECT * FROM users WHERE email = %s AND password = %s"
        cursor.execute(query, (email, password))
        
        # Fetch one result (user) from the database
        user = cursor.fetchone()
        
        # Close the connection
        cursor.close()
        conn.close()
        
        # If user exists, return True; otherwise, return False
        if user:
            return True
        else:
            return False
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return False

# Define the login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Check credentials using MySQL
    if verify_user(email, password):
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)


