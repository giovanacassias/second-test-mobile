import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Flex from "./Flex";

type TitleH2Props = {
  title: string;
};

export default function TitleH2({ title }: TitleH2Props) {
  return (
    <Flex style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    //marginLeft: 10,
    //backgroundColor: "blue",
  },

  text: {
    color: "#233329",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 9,
  },
});
