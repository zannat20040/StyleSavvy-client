import { Pressable, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function BackBtn() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Root")} className="mr-5">
      <Text className="font-Lora_400Light text-white">Go To Main</Text>
    </Pressable>
  );
}
