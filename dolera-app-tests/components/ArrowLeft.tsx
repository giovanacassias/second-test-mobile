import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { router } from "expo-router";

export default function ArrowLeft() {
  return (
    <MaterialIcons
      name="arrow-back"
      size={30}
      color="#233329"
      style={styles.icon}
      onPress={() => router.back()}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
});
