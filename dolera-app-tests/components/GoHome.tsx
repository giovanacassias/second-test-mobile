import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { router } from "expo-router";
import Flex from "./Flex";

export default function ArrowLeft() {
  return (
    <Flex align="flex-end" justify="center" style={styles.container}>
      <MaterialIcons
        name="home"
        size={28}
        color="#233329"
        onPress={() => router.push("/")}
      />
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 30,
    //marginTop: 30,
    //backgroundColor: "green",
  },
});
