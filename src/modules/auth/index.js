import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignUp from "./SignUp"

export default function Auth() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='signUp'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='signUp' component={SignUp} />
    </Stack.Navigator>
  )
}
