import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Border } from "../utils/styles";

const GradientBox = ({ children, height }) => {
  return (
    <ImageBackground
      style={[styles.rect1, { height: height }]} // height prop을 사용하여 동적으로 설정
      imageStyle={styles.rect1_imageStyle}
      source={require("../assets/images/Gradient_kykNqTa.png")}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rect1: {
    width: "100%",
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  rect1_imageStyle: { resizeMode: "stretch" },
});

export default GradientBox;
