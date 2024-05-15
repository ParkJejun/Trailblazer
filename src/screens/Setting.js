import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import Svg, { Ellipse } from "react-native-svg";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function Setting(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group4}>
        <View style={styles.rect1Stack}>
          <ImageBackground
            style={styles.rect1}
            imageStyle={styles.rect1_imageStyle}
            source={require("../assets/images/Gradient_kykNqTa.png")}
          >
            <View style={styles.destinationStack}>
              <MaterialSearchBar1
                style={styles.destination}
              ></MaterialSearchBar1>
              <TouchableOpacity style={styles.button}>
                <View style={styles.ellipseStack}>
                  <Svg viewBox="0 0 44.51 44.51" style={styles.ellipse}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(110,69,226,1)"
                      cx={22}
                      cy={22}
                      rx={22}
                      ry={22}
                    ></Ellipse>
                  </Svg>
                  <Image
                    source={require("../assets/images/자산_2switch_icon.png")}
                    resizeMode="contain"
                    style={styles.switch_icon}
                  ></Image>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <MaterialSearchBar style={styles.departure}></MaterialSearchBar>
        </View>
      </View>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <View style={styles.group5}>
        <Text style={styles.recentPath}>Recent Path</Text>
        <View style={styles.group2}>
          <View style={styles.icon2Row}>
            <EntypoIcon name="back-in-time" style={styles.icon2}></EntypoIcon>
            <Text style={styles.loremIpsum}>
              E3 Information &amp; Electronics B/D{"\n"}→ N13 Tae Wul Gwan
            </Text>
            <Text style={styles.loremIpsum2}>04.13</Text>
            <FeatherIcon name="x" style={styles.icon3}></FeatherIcon>
          </View>
        </View>
        <View style={styles.rect2}></View>
        <View style={styles.group3}>
          <View style={styles.icon4Row}>
            <EntypoIcon name="back-in-time" style={styles.icon4}></EntypoIcon>
            <Text style={styles.loremIpsum3}>
              W6 Mir Hall, Narae Hall{"\n"}→ E3 Information &amp; Electronics
              B/D
            </Text>
            <Text style={styles.loremIpsum4}>04.02</Text>
            <FeatherIcon name="x" style={styles.icon5}></FeatherIcon>
          </View>
        </View>
        <View style={styles.rect3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group4: {
    width: 375,
    height: 193,
  },
  rect1: {
    left: 1,
    width: 375,
    height: 193,
    position: "absolute",
    top: 0,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
  },
  rect1_imageStyle: {},
  destination: {
    height: 56,
    width: 375,
    position: "absolute",
    left: 0,
    top: 23,
  },
  button: {
    top: 0,
    left: 300,
    width: 45,
    height: 45,
    position: "absolute",
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  switch_icon: {
    top: 10,
    left: 10,
    width: 25,
    height: 25,
    position: "absolute",
  },
  ellipseStack: {
    width: 45,
    height: 45,
  },
  destinationStack: {
    width: 375,
    height: 79,
    marginTop: 93,
  },
  departure: {
    position: "absolute",
    left: 0,
    top: 63,
    width: 375,
    height: 56,
  },
  rect1Stack: {
    width: 376,
    height: 193,
    marginLeft: -1,
  },
  materialIconTextButtonsFooter: {
    height: 81,
    width: 375,
    marginTop: 538,
  },
  group5: {
    width: 340,
    height: 158,
    marginTop: -605,
    marginLeft: 17,
  },
  recentPath: {
    color: "#121212",
    marginLeft: 1,
  },
  group2: {
    width: 339,
    height: 40,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 1,
  },
  icon2: {
    color: "#6e47e3",
    fontSize: 25,
    marginTop: 7,
  },
  loremIpsum: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 12,
  },
  loremIpsum2: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 29,
    marginTop: 12,
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 8,
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
  },
  rect2: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 11,
    marginLeft: 1,
  },
  group3: {
    width: 339,
    height: 40,
    flexDirection: "row",
    marginTop: 11,
  },
  icon4: {
    color: "#6e47e3",
    fontSize: 25,
    marginTop: 7,
  },
  loremIpsum3: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 12,
  },
  loremIpsum4: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 13,
    marginTop: 12,
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 8,
  },
  icon4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
  },
  rect3: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 11,
    marginLeft: 1,
  },
});

export default Setting;
