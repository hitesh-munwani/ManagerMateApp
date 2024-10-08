# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL connection
db = mysql.connector.connect(
    host='localhost',
    user='root',
    password='687526',
    database='management'
)

cursor = db.cursor()

# Fetch attendance data
@app.route('/attendance', methods=['GET'])
def get_attendance():
    cursor.execute('SELECT * FROM attendance')
    results = cursor.fetchall()
    attendance_data = [{'id': row[0], 'date': row[1], 'status': row[2]} for row in results]
    return jsonify(attendance_data)

# Mark attendance
@app.route('/attendance', methods=['POST'])
def mark_attendance():
    data = request.json
    date = data['date']
    status = data['status']
    
    cursor.execute('INSERT INTO attendance (date, status) VALUES (%s, %s)', (date, status))
    db.commit()
    
    return jsonify({'message': 'Attendance marked successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True)
