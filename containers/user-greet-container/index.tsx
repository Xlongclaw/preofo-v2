import { View, Text, Image } from "react-native";
import React from "react";
import GreetText from "./greet-text";

export default function UserGreetContainer() {
  return (
    <View className="flex-row items-center justify-between w-full">
      <GreetText />
      <Image
        className="w-12 h-12 rounded-full"
        src={`https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710854361/gje3vo4nceqb9gfpedtj.png`}
        alt=""
      />
    </View>
  );
}
