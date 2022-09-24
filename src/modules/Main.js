import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Auth from "./auth"
import HomeScreen from "./home/Home"
import { useAuth } from "./auth/context"
import { navigatorTheme } from "../theme/theme"
import { View } from "react-native"
import Button from "../components/Button"

function MainNavigator() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

function StartPage({ navigation }) {
  return (
    <View>
      <Button title='Home' onPress={() => navigation.navigate("start-home")} />
      <Button title='Sign up' onPress={() => navigation.navigate("start-auth")} />
    </View>
  )
}

export default function Main() {
  const { auth } = useAuth()
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer theme={navigatorTheme}>
      {/* {auth ? <MainNavigator /> : <Auth />} */}
      <Stack.Navigator
        initialRouteName='start'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='start' component={StartPage} />
        <Stack.Screen name='start-home' component={MainNavigator} />
        <Stack.Screen name='start-auth' component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
