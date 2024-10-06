// App.js
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/LoginScreen";
import HomeScreen from "./app/HomeScreen";
import ChatScreen from "./app/ChatScreen"; // Import ChatScreen
import TaskList from "./app/TaskList";
import AttendanceScreen from "./app/AttendanceScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen} // Add ChatScreen here
          options={{ title: "Chat" }}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList} // Add ChatScreen here
          options={{ title: "TaskList" }}
        />
        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen} // Add ChatScreen here
          options={{ title: "AttendanceScreen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
