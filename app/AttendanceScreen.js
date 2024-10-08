// app/AttendanceScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";

const API_URL = 'http://localhost:5000/attendance'; // Adjust the port if necessary

const AttendanceScreen = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAttendanceData(data);
      } catch (error) {
        console.error("Error fetching attendance data: ", error);
        Alert.alert("Error", "Failed to fetch attendance data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);

  const markAttendance = async () => {
    const newAttendanceRecord = {
      date: new Date().toISOString().split('T')[0], // Current date
      status: "Present", // Default status
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAttendanceRecord),
      });

      if (response.ok) {
        const result = await response.json();
        setAttendanceData(prevData => [...prevData, { id: Date.now().toString(), ...newAttendanceRecord }]);
        Alert.alert("Success", result.message);
      } else {
        const errorResponse = await response.json();
        Alert.alert("Error", errorResponse.error);
      }
    } catch (error) {
      console.error("Error marking attendance: ", error);
      Alert.alert("Error", "Failed to mark attendance.");
    }
  };

  const renderAttendanceItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Date: {item.date}</Text>
      <Text style={styles.itemText}>Status: {item.status}</Text>
    </View>
  );

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance Records</Text>
      <FlatList
        data={attendanceData}
        renderItem={renderAttendanceItem}
        keyExtractor={(item) => item.id.toString()} // Use toString() if id is a number
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.button} onPress={markAttendance}>
        <Text style={styles.buttonText}>Mark Attendance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default AttendanceScreen;
