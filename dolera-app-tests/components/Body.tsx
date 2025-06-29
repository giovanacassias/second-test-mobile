import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Flex from "./Flex";
import TitleH2 from "./TitleH2";
import Button from "./MyButton";
import MyButton from "./MyButton";
import { useRouter } from "expo-router";

type BodyProps = {
  h2: string;
  description: string;
  imgURL: string;
  buttonName: string;
  rota: string;
};

export default function Body({
  h2,
  description,
  imgURL,
  buttonName,
  rota,
}: BodyProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(rota);
  };
  return (
    <Flex>
      <TitleH2 title={h2} />
      <Text style={styles.text}>{description}</Text>
      <Flex align="center" justify="center" style={styles.container}>
        <Image source={{ uri: imgURL }} style={styles.img} />
      </Flex>
      <MyButton buttonName={buttonName} rota={rota} onPress={handlePress} />
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    //margin: 10,
    //backgroundColor: "red",
    height: "60%",
    width: "100%",
  },

  img: {
    //marginTop: 70,
    width: 150,
    height: 150,
    //marginTop: 90,
  },

  text: {
    paddingLeft: 9,
  },
});
