import React from "react";

import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import { NativeBaseProvider, View } from "native-base";
import CarouselCard from "../components/CarouselCard";
import Categories from "./Categories";

import dataCategories from "../components/dataCategories";
import dataPop from "../components/dataPopular";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Details(props) {
  const onPress = () => {
    props.navigation.navigate("Order");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <NativeBaseProvider>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 10,
            }}
          >
            <View>
              <Text style={styles.title}>Categories</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>See all</Text>
              </Pressable>
            </View>
          </View>

          <CarouselCard data={dataCategories}></CarouselCard>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 10,
            }}
          >
            <View>
              <Text style={styles.title}>Popular</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>See all</Text>
              </Pressable>
            </View>
          </View>

          <CarouselCard data={dataPop}></CarouselCard>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 15,
    fontSize: 24,
    fontWeight: "600",
    justifyContent: "flex-start",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "rgba(78, 116, 289, 1)",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default Details;
