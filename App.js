import React from "react";
// 1. import `NativeBaseProvider` component

import { StyleSheet, Pressable } from "react-native";
import { NativeBaseProvider, Text, Box, Image, Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./screens/Details";
import Categories from "./screens/Categories";

const Home = (props) => {
  const onPress = () => {
    props.navigation.navigate("Ubeurre Eat");
  };
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Image
          style={{ margin: 30 }}
          source={require("./assets/taco.png")}
          alt="Alternate Text"
          size="xl"
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Enjoy your food !
        </Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Get Started</Text>
        </Pressable>
      </Box>
    </NativeBaseProvider>
  );
};

const App = () => {
  //const
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Home} />
        <Stack.Screen name="Ubeurre Eat" component={Details} />
        <Stack.Screen name="Order" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "rgba(78, 116, 289, 1)",
    margin: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default App;
