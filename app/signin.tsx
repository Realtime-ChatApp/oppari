import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import icons from '@/constants/icons'

const signin = () => {
    const handleLogin = () => {};
    return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >

        <View className="px-10">
          <Text className="margin top-7 text-base text-center font-rubik text-black-200">
            Welcome To ChatApp
          </Text>

          <Text className="margin top-7 text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Chat With Your{"\n"}
            <Text className="text-primary-300">Friends</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ChatApp with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;