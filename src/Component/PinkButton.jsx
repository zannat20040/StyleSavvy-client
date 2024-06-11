import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PinkButton({label, onPress}) {
  return (
    <Pressable
      className="bg-customPink px-5 py-3 rounded-md" onPress={onPress}
    >
      <Text
        className="text-lg text-white font-medium text-center"
        style={styles.text}
      >
     {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    text: {
      fontFamily: "Lora_400Regular",
    },
  });
  