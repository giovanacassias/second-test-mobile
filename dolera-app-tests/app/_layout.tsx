import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#FAFAFA",
          },
        }}
      />
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({});
