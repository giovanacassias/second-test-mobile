import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Flex from "./Flex";

export default function Header() {
  return (
    <Flex align="flex-start" justify="center" style={styles.container}>
      <Image
        style={styles.logoImg}
        source={{
          uri: "https://res.cloudinary.com/ddb437lsi/image/upload/v1739141302/dolera-logo.png",
        }}
      />
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 30,
    marginTop: 30,
    paddingLeft: 0,
    //backgroundColor: "blue",
  },

  logoImg: {
    width: 100,
    //height: 30,
    flex: 1,
    resizeMode: "contain",
  },
});
