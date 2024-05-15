import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";

function Splash(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../assets/images/Gradient_kykNqTa.png")}
      >
        <Image
          source={require("../assets/images/자산_8Splash.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
  },
  rect: {
    width: 375,
    height: 812,
  },
  rect_imageStyle: {},
  image2: {
    width: 260,
    height: 260,
    marginTop: 276,
    marginLeft: 53,
  },
});

export default Splash;
