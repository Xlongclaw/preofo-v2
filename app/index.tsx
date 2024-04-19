import { View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Page() {
  React.useEffect(() => {
    setTimeout(() => {
      router.navigate("/home");
      console.log('Navigated to /home #837465');
    }, 3000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold">Preofo</Text>
    </View>
  );
}
