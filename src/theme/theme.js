import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

export const navigatorTheme = {
  dark: false,
  colors: {
    text: "#FFFFFF",
    primary: "#FFFFFF",
    background: "#0F0817",
  },
}

export const theme = StyleSheet.create({
  body: {
    flex: 1,
    width: width,
    height: height,
    color: "#FFFFFF",
    backgroundColor: "#0F0817",
  },
  textWhite: {
    color: '#FFFFFF'
  },
  titleBase: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontWeight: "400",
  },
  titleLg: {
    fontSize: 50,
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontWeight: "600",
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontWeight: "600",
    paddingVertical: 0,
    fontFamily: "Poppins",
  },
  secButton: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#D9D9D9",
  },
  secButtonText: {
    color: "#000000",
    fontWeight: "600",
    // fontFamily: "Poppins",
  }
})
