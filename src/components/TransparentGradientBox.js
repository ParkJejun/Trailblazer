import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Border } from "../../GlobalStyles";

const TransparentGradientBox = ({ children, height = 100 }) => {
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
    margin: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  rect1_imageStyle: {
    resizeMode: "stretch",
    opacity: 0.7,
    borderRadius: Border.br_base,
  },
});

export default TransparentGradientBox;
