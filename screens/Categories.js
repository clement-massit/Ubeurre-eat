import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import CarouselCategoriesDetails from "../components/CarouselCategoriesDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import datas from "../components/dataCategoriesDetails";

const Sandwiches = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <NativeBaseProvider>
          <Text style={styles.title}>Burgers</Text>

          <CarouselCategoriesDetails
            data={datas.databurger}
          ></CarouselCategoriesDetails>

          <Text style={styles.title}>Pizzas</Text>

          <CarouselCategoriesDetails
            data={datas.datapizza}
          ></CarouselCategoriesDetails>

          <Text style={styles.title}>Sushi</Text>

          <CarouselCategoriesDetails
            data={datas.datasushi}
          ></CarouselCategoriesDetails>

          <Text style={styles.title}>Tapas</Text>

          <CarouselCategoriesDetails
            data={datas.datatapas}
          ></CarouselCategoriesDetails>

          <Text style={styles.title}>Breakfast</Text>

          <CarouselCategoriesDetails
            data={datas.databreakfast}
          ></CarouselCategoriesDetails>

          <Text style={styles.title}>Cakes</Text>

          <CarouselCategoriesDetails
            data={datas.datacakes}
          ></CarouselCategoriesDetails>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
    fontSize: 24,
    fontWeight: "600",
    justifyContent: "flex-start",
  },
});

export default Sandwiches;
