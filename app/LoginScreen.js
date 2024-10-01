import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert, // Import Alert from React Native
} from "react-native";
import axios from "axios"; // Make sure to import axios
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const navigation = useNavigation(); // Get the navigation object

  const handleLogin = () => {
    // Validate input fields here if needed
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Login successful") {
          // Navigate to HomeScreen upon successful login
          navigation.navigate("Home");
        } else {
          // Show an alert if email or password is incorrect
          Alert.alert("Login Failed", "Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
        Alert.alert("Error", "An error occurred. Please try again.");
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../../ManagerMate/assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>
            By signing in you are agreeing {"\n"} our
            <Text style={styles.link}> Term and privacy policy</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.options}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setRememberPassword(!rememberPassword)}
              >
                {rememberPassword && <View style={styles.checkedBox} />}
              </TouchableOpacity>
              <Text style={styles.optionText}>Remember password</Text>
            </View>
            <TouchableOpacity
              onPress={() => console.log("Forgot password pressed")}
            >
              <Text style={styles.optionText}>Forget password</Text>
            </TouchableOpacity>
          </View>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <View style={styles.bottomContainer}>
          <Image
            style={styles.image}
            source={require("../../ManagerMate/assets/btmImg.png")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  topContainer: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    marginTop: 50,
    resizeMode: "center",
    alignSelf: "center",
  },
  text: {
    color: "#000",
    marginTop: -40,
    marginBottom: 50,
    textAlign: "center",
  },
  link: {
    color: "#1E90FF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    zIndex: 1, // Ensure the input is on top of other views
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  checkedBox: {
    width: 14,
    height: 14,
    backgroundColor: "#000",
  },
  optionText: {
    fontSize: 12,
    color: "#666",
  },
  bottomContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200, // Adjust height as needed
  },
});

export default LoginScreen;
