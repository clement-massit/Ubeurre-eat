import React from "react";
import { Pressable } from "native-base";
import { PricingCard, lightColors } from "@rneui/themed";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCategoriesDetailsItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <PricingCard
        color={lightColors.secondary}
        title={item.title}
        price={item.price}
        info={item.info}
        button={{ title: "Order", icon: "shopping-cart" }}
      >
        erer
      </PricingCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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

export default CarouselCategoriesDetailsItem;
