import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { theme } from "../theme/theme"

const btnstyles = {
  secondary: {
    btn: theme.secButton,
    text: theme.secButtonText,
  },
}

const Button = ({ title, onPress, type = "secondary", style }) => {
  return (
    <TouchableOpacity style={[btnstyles[type].btn, style]} onPress={onPress} activeOpacity={.8}>
      <Text style={btnstyles[type].text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export default Button
