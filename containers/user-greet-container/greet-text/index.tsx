import { View, Text } from "react-native";
import React from "react";

export default function GreetText() {
  return (
    <View className="flex-row gap-1">
      <Text className="text-xl font-semibold text-[#b6b6b6]">Welcome!</Text>
      <Text className="text-xl font-bold">Jacob</Text>
    </View>
  );
}
