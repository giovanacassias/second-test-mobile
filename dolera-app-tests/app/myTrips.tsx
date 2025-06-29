import {
  View,
  Text,
  StyleSheet,
  FlatList,
  InteractionManager,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Flex from "../components/Flex";
import TitleH1 from "../components/TitleH1";
import Header from "../components/Header";
import { Avatar, Card, List } from "react-native-paper";
import TripCard from "../components/TripCard";
import data from "../services/MOCK_DATA.json";
import GoHome from "../components/GoHome";

export default function myTrips() {
  const params = useLocalSearchParams();
  const trip = params.trip ? JSON.parse(params.trip as string) : null;
  const isValidTrip =
    trip.name && trip.currency && trip.startDate && trip.endDate && trip.budget;

  const tripData = isValidTrip ? [trip, ...data] : data;

  return (
    <Flex style={styles.container}>
      <Flex direction="row" align="flex-end" style={styles.header}>
        <Header />
        <GoHome />
      </Flex>
      <TitleH1 title="Caio's trips" />
      <Flex justify="space-around" align="center" style={styles.listContainer}>
        <FlatList
          style={styles.listContainer}
          data={tripData}
          renderItem={({ item }) => (
            <TripCard
              name={item.name}
              currency={item.currency}
              start={item.startDate}
              end={item.endDate}
              budget={item.budget}
            />
          )}
        />
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: "100%",
  },

  listContainer: {
    flex: 1,
  },

  header: {
    width: "100%",
    //backgroundColor: "red",
  },
});
