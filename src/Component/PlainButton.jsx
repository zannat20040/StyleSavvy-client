import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PlainButton({label,onPress, customCss}) {
  return (
    <Pressable>
    <Text
      className={`text-center  ${customCss} font-Lora_400Light`}
      onPress={onPress}
    >
     {label}
    </Text>
  </Pressable>
  )
}

const styles = StyleSheet.create({})