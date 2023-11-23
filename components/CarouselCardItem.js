import React from "react";
import { Pressable } from "native-base";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Details from "../screens/Details";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  const onPress = () => {
    navigation.navigate(item.title);
  };
  if (item.desc[0] === "/") {
    return (
      <View style={styles.container} key={index}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <Text style={styles.header}>{item.title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.desc}</Text>
      <Text style={styles.rating}>⭐{item.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 150,
    borderTopLeftRadius: 4.65,
    borderTopRightRadius: 4.65,
  },
  header: {
    color: "#222",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  rating: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default CarouselCardItem;
