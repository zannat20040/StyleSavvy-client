import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PinkButton({label, onPress, disabled}) {
  return (
    <Pressable
    className={`bg-customPink px-5 py-3 rounded-md ${disabled ? 'opacity-50' : ''}`}
    onPress={onPress}
    disabled={disabled}
    >
      <Text
        className="text-lg text-white font-medium text-center font-Lora_400Light"
      >
     {label}
      </Text>
    </Pressable>
  );
}

