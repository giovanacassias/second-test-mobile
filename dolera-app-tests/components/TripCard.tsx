import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Flex from "./Flex";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";

type TripCardProps = {
  name: string;
  currency: string;
  start: string;
  end: string;
  budget: string;
};

export default function TripCard({
  name,
  currency,
  start,
  end,
  budget,
}: TripCardProps) {
  const { showActionSheetWithOptions } = useActionSheet();
  const options = ["Delete", "Save", "Cancel"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

  return (
    <Flex style={styles.container} direction="row">
      <Flex style={styles.icon} align="center" justify="center">
        <MaterialIcons name="flight" size={40} color="#FA9984" />
      </Flex>
      <Flex style={styles.info} align="center" justify="center">
        <Flex
          style={styles.titleContainer}
          direction="row"
          align="center"
          justify="space-between"
        >
          <Text style={styles.tripName}>{name}</Text>
          <TouchableOpacity
            onPress={() => {
              console.log("Botão pressionado");

              showActionSheetWithOptions(
                {
                  options,
                  cancelButtonIndex,
                  destructiveButtonIndex,
                },
                (iconIndex) => {
                  console.log(iconIndex);
                }
              );
            }}
          >
            <MaterialIcons name="edit" size={20} color="#FA9984" />
          </TouchableOpacity>
        </Flex>
        <Flex
          style={styles.details}
          direction="column"
          align="flex-start"
          justify="center"
        >
          <Text style={styles.detailsText}>
            <MaterialIcons name="place" size={12} color="#FA9984" />
            {currency}
          </Text>
          <Text style={styles.detailsText}>
            <MaterialIcons name="savings" size={12} color="#FA9984" />
            {budget}
          </Text>
          <Text style={styles.detailsText}>
            <MaterialIcons name="east" size={12} color="#FA9984" />
            {start}
          </Text>
          <Text style={styles.detailsText}>
            <MaterialIcons name="west" size={12} color="#FA9984" />
            {end}
          </Text>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "white",
    height: 120,
    //flex: 1,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#EDEDED",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },

  icon: {
    height: "100%",
    //backgroundColor: "#FA9984",
    width: "25%",
  },

  info: {
    //backgroundColor: "#FA9984",
    width: "75%",
    borderEndEndRadius: 10,
    borderTopEndRadius: 10,
  },

  tripName: {
    fontSize: 16,
    color: "#FA9984",
    fontWeight: "bold",
    textTransform: "uppercase",
    //marginBottom: 8,
    //backgroundColor: "red",
  },

  details: {
    //backgroundColor: "blue",
    width: "90%",
    color: "#FA9984",
    marginTop: 5,
  },

  detailsText: {
    fontWeight: "500",
    fontSize: 9,
    textTransform: "capitalize",
    color: "#233329",
  },

  titleContainer: {
    width: "90%",
    //backgroundColor: "yellow",
  },
});
