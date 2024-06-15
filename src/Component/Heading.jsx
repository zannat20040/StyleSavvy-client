import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heading({label}) {
  return (
    <Text className="my-5 text-lg font-Lora_700Bold">{label}</Text>

  )
}

const styles = StyleSheet.create({})