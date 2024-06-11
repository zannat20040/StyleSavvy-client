import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function Button({ label }) {
  return (
    <Pressable className="bg-white px-5 py-3 rounded-md">
      <Text
        className="text-lg text-customPink font-medium text-center font-Lora_400Light"
      >
        {label}
      </Text>
    </Pressable>
  );
}

