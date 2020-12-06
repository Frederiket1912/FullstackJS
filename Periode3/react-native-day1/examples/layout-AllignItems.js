import React from "react";
import { View, Text } from "react-native";

AlignItemsBasics = () => {
  return (
    // Try setting `alignItems` to 'flex-start'
    // Try setting `justifyContent` to `flex-end`.
    // Try setting `flexDirection` to `row`.
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
      <View style={{ height: 50, backgroundColor: "skyblue" }} />
      <View style={{ height: 100, backgroundColor: "steelblue" }} />
    </View>
  );
};

//https://reactnative.dev/docs/flexbox#flex-direction
export default function AlignItemsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>Align Items</Text>
      <AlignItemsBasics />
    </View>
  );
}
