import React from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Input from "../../components/Input"
import ScreenContainer from "../../components/ScreenContainer"
import { theme } from "../../theme/theme"
import Icon from "@expo/vector-icons/AntDesign"

function SignUp({navigation}) {
  return (
    <ScreenContainer>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[theme.titleLg, styles.title]}>Sign up</Text>
          <View style={styles.form}>
            <Input label='@Username' />
            <Input label='Email' />
            <Input label='Password' />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Icon name='arrowleft' size={24} />
      </TouchableOpacity>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    paddingHorizontal: 35,
  },
  title: {
    textAlign: "center",
    marginBottom: 100,
  },
  form: {},
  back: {
    position: "absolute",
    bottom: 35,
    left: 25,
    width: 40,
    height: 40,
    borderRadius: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
})

export default SignUp
