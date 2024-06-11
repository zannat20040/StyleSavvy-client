import React, { useState } from "react";
import { View, TextInput, ScrollView, Text } from "react-native";
import PinkButton from "./PinkButton";
import { StatusBar } from "expo-status-bar";
import Logo from "./Logo";
import PlainButton from "./PlainButton";
import { useNavigation } from "@react-navigation/native";

export default function SignUpForm({
  handleSignup,
  setPhoneNumber,
  setConfirmPassword,
  setPassword,
  setName,
  setEmail,
  email,
  name,
  password,
  confirmPassword,
  phoneNumber,
}) {
  const navigation = useNavigation();
  return (
    <View className="bg-customPink h-full w-full pt-14 flex flex-col justify-between">
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
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="px-5 py-3 border-gray-200  border rounded-md mt-3"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          className="px-5 py-3 border-gray-200  border rounded-md mt-3"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TextInput
          className="px-5 py-3 border-gray-200  border rounded-md my-3"
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <View>
          <PinkButton label={"Sign up"} onPress={handleSignup} />
          <View className="mt-4  flex justify-center items-center">
            <Text className="font-Lora_400Light  ">
              Do you have already an account?
            </Text>
            <PlainButton
              label={"Sign in"}
              customCss={"text-customPink "}
              onPress={() => navigation.navigate("Signin")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
