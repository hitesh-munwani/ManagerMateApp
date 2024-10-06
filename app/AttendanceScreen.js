// app/AttendanceScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const AttendanceScreen = () => {
  const attendanceData = [
    { id: "1", date: "2024-10-01", status: "Present" },
    { id: "2", date: "2024-10-02", status: "Absent" },
    { id: "3", date: "2024-10-03", status: "Present" },
  ];

  const renderAttendanceItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Date: {item.date}</Text>
      <Text style={styles.itemText}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance Records</Text>
      <FlatList
        data={attendanceData}
        renderItem={renderAttendanceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.button}>
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
});

export default AttendanceScreen;
