import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Flex from "./Flex";

type TitleH1Props = {
  title: string;
};

export default function TitleH1({ title }: TitleH1Props) {
  return (
    <Flex style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    //height: 100,
    //backgroundColor: "red",
    marginBottom: 40,
  },

  text: {
    color: "#233329",
    fontSize: 45,
    fontWeight: "bold",
    paddingLeft: 9,
  },
});
