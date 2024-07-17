import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  CheckBox,
} from "react-native";

const ManagerMateLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        By signing in you are agreeing to our Term and privacy policy
      </Text>
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text>Remember password</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text>Forget password</Text>
      </View>
      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default ManagerMateLogin;
