import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Border } from "../../GlobalStyles";

const TransparentGradientBox = ({
  children,
  height = 100,
  borderRadius = Border.br_base,
}) => {
  return (
    <ImageBackground
      style={[styles.rect1, { height: height, borderRadius: borderRadius }]}
      imageStyle={styles.rect1_imageStyle}
      source={require("../assets/images/Gradient_kykNqTa.png")}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rect1: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  rect1_imageStyle: {
    resizeMode: "stretch",
    opacity: 0.7,
  },
});

export default TransparentGradientBox;
