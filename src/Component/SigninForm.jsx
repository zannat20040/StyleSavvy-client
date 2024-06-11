import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Logo from "./Logo";
import PlainButton from "./PlainButton";
import PinkButton from "./PinkButton";

export default function SigninForm({
  handleSignin,
  setPassword,
  setEmail,
  email,
  password,
}) {
  const navigation = useNavigation();
  return (
    <View className="bg-customPink h-full w-full pt-40 flex flex-col justify-between">
      <StatusBar style="auto" />
      <Logo />

      <ScrollView className="bg-white flex-grow-0 w-full  rounded-t-3xl py-14 px-8 ">
        <TextInput
          className="px-5 py-3 border-gray-200  border rounded-md mt-3"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          className="px-5 py-3 border-gray-200  border rounded-md mt-3"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View className="mt-3">
          <PinkButton label={"Sign in"} onPress={handleSignin} />
          <View className="mt-4  flex justify-center items-center">
            <Text className="font-Lora_400Light  ">
              Do you have already an account?
            </Text>
            <PlainButton
              label={"Sign up"}
              customCss={"text-customPink "}
              onPress={() => navigation.navigate("Signup")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
