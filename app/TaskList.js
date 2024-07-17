// app/TaskList.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const TaskList = () => {
  // Dummy data for tasks (replace with actual data from backend or state)
  const tasks = [
    {
      id: 1,
      title: "Complete Project Proposal",
      description: "Write the initial project proposal for the new client.",
      dueDate: "2024-07-20",
      status: "Pending",
    },
    {
      id: 2,
      title: "Review Code Changes",
      description:
        "Review the latest code changes submitted by the development team.",
      dueDate: "2024-07-18",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Prepare Presentation Slides",
      description: "Prepare slides for the upcoming project presentation.",
      dueDate: "2024-07-22",
      status: "Complete",
    },
    {
      id: 4,
      title: "Schedule Team Meeting",
      description:
        "Schedule a meeting to discuss project milestones with the team.",
      dueDate: "2024-07-19",
      status: "Pending",
    },
  ];

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <Text style={styles.taskDueDate}>Due: {item.dueDate}</Text>
      <Text style={[styles.taskStatus, getStatusStyle(item.status)]}>
        {item.status}
      </Text>
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return { color: "orange" };
      case "In Progress":
        return { color: "blue" };
      case "Complete":
        return { color: "green" };
      default:
        return { color: "black" };
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    width: "80%",
  },
  taskItem: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskDescription: {
    marginTop: 5,
    color: "#666",
  },
  taskDueDate: {
    marginTop: 5,
    color: "#999",
  },
  taskStatus: {
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default TaskList;
