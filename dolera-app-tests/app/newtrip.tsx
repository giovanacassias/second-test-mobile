import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import Button from "../components/MyButton";
import Header from "../components/Header";
import ArrowLeft from "../components/ArrowLeft";
import TitleH1 from "../components/TitleH1";
import Flex from "../components/Flex";
import TripForm from "../components/TripForm";
import MyButton from "../components/MyButton";
import { useRouter } from "expo-router";

export default function newtrip() {
  return (
    <View style={styles.container}>
      <ArrowLeft />
      <Flex marginTop={25}>
        <TitleH1 title="Create your trip" />
      </Flex>
      <Flex>
        <TripForm btnName="create trip" rota="/myTrips" />
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    //backgroundColor: "red",
    height: "100%",
  },
  /*   button: {
    marginTop: 50,
  }, */
});
