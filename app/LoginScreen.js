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
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
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
              <TouchableOpacity style={styles.checkbox}>
                {/* You can add a checked icon here */}
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
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../ManagerMate/assets/btmImg.jpg")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
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
    marginRight: 5,
  },
  optionText: {
    fontSize: 12,
    color: "#666",
  },
 
  image: {
    width: "100%",
    height: 200,
    
  },
});

export default LoginScreen;
