// app/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("./../assets/DashBoard1.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.buttonContainer}>
        {/* //Attendance */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Attendance")}
          >
            <Text style={styles.buttonText}>Attendance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("TaskList")}
          >
            <Text style={styles.buttonText}>Task List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Report")}
          >
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Image
            style={styles.image}
            source={require("./../assets/btmImg.png")}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topContainer: {
    marginTop: 50,
  },
  logo: {
    width: 150,
    resizeMode: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  bottomContainer: {
    width: "100%",
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: 200, // Adjust height as needed
  },
});

export default HomeScreen;
