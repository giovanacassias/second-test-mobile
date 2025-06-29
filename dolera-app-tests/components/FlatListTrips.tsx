import { View, Text, FlatList } from "react-native";
import React from "react";
import Flex from "./Flex";
import TripCard from "./TripCard";

type FlatListTripsProps = {
  trip: [] | null;
  data: [];
};

export default function FlatListTrips({ trip, data }: FlatListTripsProps) {
  return <Flex align="center" justify="space-around" direction="column"></Flex>;
}
