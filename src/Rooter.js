// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle, HeaderBackButton } from '@react-navigation/stack';
import { LoginPages, MainPages, PastOrdersPages, SplashScreen } from "./pages"

const Stack = createStackNavigator();

function Rooter() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{ headerLeft: null }} name="Login Pages" component={LoginPages} />
        <Stack.Screen options={{ headerLeft: null }} name="Main Pages" component={MainPages} />
        <Stack.Screen name="Past Orders Pages" component={PastOrdersPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rooter;