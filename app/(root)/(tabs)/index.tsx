import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-rubik text-3xl">Welcome to ChatApp</Text>
      <Link href="/signin">Sign In</Link>
      <Link href="/login">Log in</Link>
    </View>
  );
}
