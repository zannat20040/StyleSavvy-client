import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Search() {
  return (
    <View className= ''>
      <TextInput
      className='w-full py-3 px-5 bg-gray-100 rounded-lg'
        placeholder="Search"
      />
    </View>
  );
}
