import { View, Text, StyleProp, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";

type FlexProps = {
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-around"
    | "space-between";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  marginTop?: number;
  gap?: number;
  direction?: "row" | "column";
  style?: StyleProp<ViewStyle>;
} & PropsWithChildren;

export default function Flex({
  children,
  justify,
  align,
  marginTop,
  gap,
  direction,
  style,
}: FlexProps) {
  return (
    <View
      style={[
        {
          justifyContent: justify,
          alignItems: align,
          marginTop: marginTop,
          gap,
          flexDirection: direction,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
