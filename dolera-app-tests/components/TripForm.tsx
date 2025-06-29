import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Flex from "./Flex";
import InputComLabel from "./InputComLabel";
import MyButton from "./MyButton";
import { useRouter } from "expo-router";

type TripFormProps = {
  btnName: string;
  rota: string;
};

export default function TripForm({ btnName, rota }: TripFormProps) {
  const router = useRouter();

  const [trip, setTrip] = useState({
    name: "",
    currency: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  const handleChange = (field: keyof typeof trip, value: string) => {
    const updatedTrip = { ...trip, [field]: value };
    setTrip(updatedTrip);
    console.log(`Viagem sendo cadastrada:`, updatedTrip);
  };

  const handleSubmit = () => {
    router.push({
      pathname: rota,
      params: {
        trip: JSON.stringify(trip),
      },
    });
  };

  return (
    <View>
      <Flex>
        <InputComLabel
          campo="Name"
          placeholder="France 2024"
          value={trip.name}
          onChangeText={(text) => handleChange("name", text)}
        />
        <InputComLabel
          campo="Currency"
          placeholder="EUR - Euro"
          value={trip.currency}
          onChangeText={(text) => handleChange("currency", text)}
        />
        <InputComLabel
          campo="Trip starts at"
          placeholder="10/12/2024"
          value={trip.startDate}
          onChangeText={(text) => handleChange("startDate", text)}
        />
        <InputComLabel
          campo="Trip ends at"
          placeholder="20/12/2024"
          value={trip.endDate}
          onChangeText={(text) => handleChange("endDate", text)}
        />
        <InputComLabel
          campo="Budget"
          placeholder="$10,000"
          value={trip.budget}
          onChangeText={(text) => handleChange("budget", text)}
        />
      </Flex>
      <MyButton buttonName={btnName} rota={rota} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
