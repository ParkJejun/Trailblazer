import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Result(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialMapView2Stack}>
        <MaterialMapView style={styles.materialMapView2}></MaterialMapView>
        <View gradientImage="Gradient_kykNqTa.png" style={styles.rect2}>
          <View style={styles.group2Row}>
            <View style={styles.group2}>
              <View style={styles.loremIpsumRow}>
                <Text style={styles.loremIpsum}>16</Text>
                <Text style={styles.min}>min</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.group6}>
              <View style={styles.ellipse3Stack}>
                <Svg viewBox="0 0 44.51 44.51" style={styles.ellipse3}>
                  <Ellipse
                    strokeWidth={0}
                    cx={22}
                    cy={22}
                    rx={22}
                    ry={22}
                  ></Ellipse>
                </Svg>
                <FontAwesomeIcon
                  name="star-o"
                  style={styles.icon5}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <View style={styles.ellipse2Stack}>
                <Svg viewBox="0 0 44.51 44.51" style={styles.ellipse2}>
                  <Ellipse
                    strokeWidth={0}
                    cx={22}
                    cy={22}
                    rx={22}
                    ry={22}
                  ></Ellipse>
                </Svg>
                <IoniconsIcon
                  name="md-share"
                  style={styles.icon4}
                ></IoniconsIcon>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.group3Row}>
            <View style={styles.group3}>
              <View style={styles.icon3Row}>
                <MaterialCommunityIconsIcon
                  name="map-marker-distance"
                  style={styles.icon3}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.n3}>936 m</Text>
              </View>
            </View>
            <View style={styles.group4Stack}>
              <View style={styles.group4}>
                <View style={styles.imageRow}>
                  <Image
                    source={require("../assets/images/자산_5step_icon_c.png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.n4}>1,462</Text>
                </View>
              </View>
              <View style={styles.group5}>
                <View style={styles.image2Row}>
                  <Image
                    source={require("../assets/images/자산_6fire_icon_c.png")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                  <Text style={styles.n5}>42 kcal</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group1}>
          <View style={styles.rect3Stack}>
            <ImageBackground
              style={styles.rect3}
              imageStyle={styles.rect3_imageStyle}
              source={require("../assets/images/Gradient_kykNqTa.png")}
            >
              <View style={styles.destination1Stack}>
                <MaterialSearchBar1
                  style={styles.destination1}
                ></MaterialSearchBar1>
                <TouchableOpacity style={styles.button1}>
                  <View style={styles.ellipse1Stack}>
                    <Svg viewBox="0 0 44.51 44.51" style={styles.ellipse1}>
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
                      style={styles.switchIcon1}
                    ></Image>
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <MaterialSearchBar style={styles.departure1}></MaterialSearchBar>
          </View>
        </View>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter>
        <EntypoIcon name="location-pin" style={styles.icon1}></EntypoIcon>
        <EntypoIcon name="location-pin" style={styles.icon2}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialMapView2: {
    width: 375,
    height: 812,
    position: "absolute",
    left: 0,
    top: 0,
  },
  rect2: {
    left: 19,
    width: 336,
    height: 139,
    position: "absolute",
    top: 581,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30,
  },
  group2: {
    width: 107,
    height: 60,
    flexDirection: "row",
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 50,
  },
  min: {
    color: "#121212",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 24,
  },
  loremIpsumRow: {
    height: 60,
    flexDirection: "row",
    flex: 1,
  },
  group6: {
    width: 45,
    height: 45,
    marginLeft: 74,
    marginTop: 7,
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  icon5: {
    top: 6,
    left: 11,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 30,
  },
  ellipse3Stack: {
    width: 45,
    height: 45,
  },
  button2: {
    width: 45,
    height: 45,
    marginLeft: 16,
    marginTop: 7,
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  icon4: {
    top: 6,
    left: 11,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 30,
  },
  ellipse2Stack: {
    width: 45,
    height: 45,
  },
  group2Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 24,
  },
  group3: {
    width: 79,
    height: 27,
    flexDirection: "row",
  },
  icon3: {
    color: "#6e45e2",
    fontSize: 25,
  },
  n3: {
    color: "#121212",
    lineHeight: 20,
    fontSize: 18,
    marginLeft: 6,
    marginTop: 4,
  },
  icon3Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: -3,
  },
  group4: {
    top: 1,
    left: 0,
    width: 122,
    height: 20,
    position: "absolute",
    flexDirection: "row",
  },
  image: {
    width: 20,
    height: 20,
  },
  n4: {
    color: "#121212",
    lineHeight: 20,
    fontSize: 18,
    marginLeft: 9,
  },
  imageRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 49,
  },
  group5: {
    top: 0,
    left: 99,
    width: 84,
    height: 20,
    position: "absolute",
    flexDirection: "row",
  },
  image2: {
    width: 20,
    height: 20,
  },
  n5: {
    color: "#121212",
    lineHeight: 20,
    fontSize: 18,
    marginLeft: 7,
  },
  image2Row: {
    height: 20,
    flexDirection: "row",
    flex: 1,
  },
  group4Stack: {
    width: 183,
    height: 21,
    marginLeft: 25,
    marginTop: 3,
  },
  group3Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 25,
    marginRight: 25,
  },
  group1: {
    top: 0,
    left: 0,
    width: 375,
    height: 193,
    position: "absolute",
  },
  rect3: {
    left: 1,
    width: 375,
    height: 193,
    position: "absolute",
    top: 0,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
  },
  rect3_imageStyle: {},
  destination1: {
    height: 56,
    width: 375,
    position: "absolute",
    left: 0,
    top: 23,
  },
  button1: {
    top: 0,
    left: 300,
    width: 45,
    height: 45,
    position: "absolute",
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  switchIcon1: {
    top: 10,
    left: 10,
    width: 25,
    height: 25,
    position: "absolute",
  },
  ellipse1Stack: {
    width: 45,
    height: 45,
  },
  destination1Stack: {
    width: 375,
    height: 79,
    marginTop: 93,
  },
  departure1: {
    position: "absolute",
    left: 0,
    top: 63,
    width: 375,
    height: 56,
  },
  rect3Stack: {
    width: 376,
    height: 193,
    marginLeft: -1,
  },
  materialIconTextButtonsFooter1: {
    height: 81,
    width: 375,
    position: "absolute",
    left: 0,
    top: 731,
  },
  icon1: {
    top: 368,
    left: 249,
    position: "absolute",
    color: "#b82c44",
    fontSize: 70,
  },
  icon2: {
    top: 257,
    left: 64,
    position: "absolute",
    color: "rgba(68,186,179,1)",
    fontSize: 70,
  },
  materialMapView2Stack: {
    width: 375,
    height: 812,
  },
});

export default Result;
