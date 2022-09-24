import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import { theme } from "../theme/theme"

const Input = ({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }) => {
  return (
    <View style={styles.container}>
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          placeholderTextColor='#FFFFFF'
          keyboardType={keyboardType}
          style={[theme.input, styles.input]}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={[theme.input, styles.input]}
          placeholderTextColor='#FFFFFF'
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.rightlabel}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 24,
    backgroundColor: "rgba(217, 217, 217, 0.2)",
    borderRadius: 20,
    marginBottom: 25,
  },
  input: {},
  rightlabel: { color: "#fff", fontWeight: "700" },
})

export default Input
