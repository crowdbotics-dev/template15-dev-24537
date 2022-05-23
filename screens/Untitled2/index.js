import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      position: "absolute",
      left: 28.5,
      top: 0,
      width: 140,
      height: 70,
      lineHeight: 49,
      fontSize: 17,
      borderRadius: 0,
      transform: "rotate(0deg)",
      color: "#d11c3e",
      fontFamily: "Merriweather",
      fontWeight: 900,
      letterSpacing: 2,
      textAlign: "center",
      opacity: 0.79
    }}>Text Setting</Text></View>;
};

export default Untitled2;