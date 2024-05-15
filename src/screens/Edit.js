import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialSearchBar2 from "../components/MaterialSearchBar2";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Edit(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter>
      <ImageBackground
        style={styles.rect5}
        imageStyle={styles.rect5_imageStyle}
        source={require("../assets/images/Gradient_kykNqTa.png")}
      >
        <MaterialSearchBar2
          style={styles.materialSearchBar2}
        ></MaterialSearchBar2>
      </ImageBackground>
      <View style={styles.group1}>
        <Text style={styles.matchingResults1}>Matching Results</Text>
        <View style={styles.group2}>
          <View style={styles.icon2Row}>
            <EntypoIcon name="location-pin" style={styles.icon2}></EntypoIcon>
            <Text style={styles.n3}>N13 Tae Wul Gwan</Text>
            <FeatherIcon name="x" style={styles.icon3}></FeatherIcon>
          </View>
          <View style={styles.rect2}></View>
        </View>
        <View style={styles.group3}>
          <View style={styles.icon4Row}>
            <EntypoIcon name="location-pin" style={styles.icon4}></EntypoIcon>
            <Text style={styles.loremIpsum1}>W6 Mir Hall, Narae Hall</Text>
            <FeatherIcon name="x" style={styles.icon5}></FeatherIcon>
          </View>
          <View style={styles.rect3}></View>
        </View>
        <View style={styles.group4}>
          <View style={styles.icon6Row}>
            <EntypoIcon name="location-pin" style={styles.icon6}></EntypoIcon>
            <Text style={styles.loremIpsum2}>
              E3 Information &amp; Electronics B/D
            </Text>
            <Text style={styles.loremIpsum3}>04.02</Text>
            <FeatherIcon name="x" style={styles.icon7}></FeatherIcon>
          </View>
          <View style={styles.rect4}></View>
        </View>
      </View>
      <View gradientImage="Gradient_kykNqTa.png" style={styles.rect1}>
        <View style={styles.icon1Row}>
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.editMap}>Edit Map</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialIconTextButtonsFooter1: {
    height: 81,
    width: 375,
    marginTop: 731,
  },
  rect5: {
    width: 385,
    height: 77,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    marginTop: -721,
    marginLeft: -5,
    overflow: "hidden",
  },
  rect5_imageStyle: {},
  materialSearchBar2: {
    height: 56,
    width: 375,
    marginTop: 9,
    marginLeft: 5,
  },
  group1: {
    width: 340,
    height: 158,
    marginTop: 32,
    marginLeft: 17,
  },
  matchingResults1: {
    color: "#121212",
    marginLeft: 1,
  },
  group2: {
    width: 339,
    height: 40,
    marginTop: 26,
    marginLeft: 1,
  },
  icon2: {
    color: "#6e47e3",
    fontSize: 25,
  },
  n3: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 13,
    marginTop: 3,
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 159,
    marginTop: 1,
  },
  icon2Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 7,
  },
  rect2: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 17,
  },
  group3: {
    width: 339,
    height: 40,
    marginTop: 22,
  },
  icon4: {
    color: "#6e47e3",
    fontSize: 25,
  },
  loremIpsum1: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 13,
    marginTop: 3,
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 133,
    marginTop: 1,
  },
  icon4Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 7,
  },
  rect3: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 18,
    marginLeft: 1,
  },
  group4: {
    width: 339,
    height: 40,
    marginTop: 23,
  },
  icon6: {
    color: "#6e47e3",
    fontSize: 25,
  },
  loremIpsum2: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 13,
    marginTop: 3,
  },
  loremIpsum3: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 28,
    marginTop: 5,
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 1,
  },
  icon6Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 7,
  },
  rect4: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 18,
    marginLeft: 1,
  },
  rect1: {
    width: 375,
    height: 91,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: -358,
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  editMap: {
    color: "#121212",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 105,
    marginTop: 5,
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 152,
    marginLeft: 17,
    marginTop: 45,
  },
});

export default Edit;
