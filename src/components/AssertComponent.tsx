import React from "react";
import { View, Text } from "react-native";
import { Style } from "tailwind-rn/dist";

const Assert = (tailwind: (_classNames: string) => Style, condition: boolean, message: string) => {

  if (condition)
    return (
      <View style={tailwind("flex justify-center items-center w-full h-full p-4")}>
        <Text style={tailwind("text-red-600 font-bold text-2xl text-center mb-2")}>An unexpected error occured!</Text>
        <Text style={tailwind("text-red-600 text-xl text-center")}>{message}</Text>
      </View>
    );
  return undefined;
};

export default Assert;
