import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Flex from "./Flex";

type MyButtonProps = {
  buttonName: string;
  rota: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export default function MyButton({
  buttonName,
  rota,
  style,
  onPress,
}: MyButtonProps) {
  return (
    <Flex>
      <TouchableOpacity onPress={onPress} testID="MyButton:Button:ClickMe">
        <Text style={styles.button}>{buttonName}</Text>
      </TouchableOpacity>
    </Flex>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FA9984",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    color: "#FAFAFA",
    fontSize: 12,
    fontWeight: "bold",
    //width: "100%",
    height: 45,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    marginTop: 20,
  },
});
