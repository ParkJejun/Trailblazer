import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border } from "../utils/styles";

const TransparentGradientBox = ({
  children,
  height = 100,
  borderRadius = Border.br_base,
}) => {
  return (
    <LinearGradient
      colors={[
        "rgba(136, 211, 206,0.7)",
        "rgba(135, 210, 206,0.7)",
        "rgba(79, 172, 254,0.7)",
        "rgba(110, 69, 226,0.7)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.0764, 0.0764, 0.3014, 0.8534]} // 각 색상의 위치를 나타내는 배열
      style={[styles.rect1, { height: height, borderRadius: borderRadius }]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rect1: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransparentGradientBox;
