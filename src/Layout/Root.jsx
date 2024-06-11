import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Logo from "../Component/Logo";
import Button from "../Component/Button";
import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import PlainButton from "../Component/PlainButton";
import { StatusBar } from "expo-status-bar";

export default function Root() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
  });

  return (
    <SafeAreaView className="text-black bg-customPink h-full w-full p-5 pt-36 font-Lora_400Light">
      <StatusBar style="auto" />
      <Logo />
      <Text className="text-white text-center mt-5 text-3xl font-Lora_400Light">
        StyleSavvy
      </Text>
      <View className="mt-28 ">
        <Button
          label={"Get Started"}
          onPress={() => navigation.navigate("Home")}
        />

        <PlainButton
          label={" Sign up"}
          customCss={"text-white text-lg mt-5"}
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </SafeAreaView>
  );
}
