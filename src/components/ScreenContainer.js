import React from "react"
import { ImageBackground, SafeAreaView } from "react-native"

const ScreenContainer = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: "cover"
        }}
        source={require("../../assets/gradient-bg.png")}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ScreenContainer
