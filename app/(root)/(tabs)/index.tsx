import { Text, View } from "react-native";
import { Link } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import Register from "./register";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Index() {
return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
);
}