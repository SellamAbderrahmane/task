import React from "react"
import { SafeAreaView } from "react-native"

const SafeView = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      {children}
    </SafeAreaView>
  )
}

export default SafeView
