import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// components
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: '#ffffff' } }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerTitle: 'List Screen'}}
      />
      <Stack.Screen name="Detail" component={Item} />
    </Stack.Navigator>
  )
};

export default StackNavigation;