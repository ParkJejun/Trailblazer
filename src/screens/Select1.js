import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import MaterialSearchBar3 from "../components/MaterialSearchBar3";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";

function Select1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <ImageBackground
          style={styles.rect1}
          imageStyle={styles.rect1_imageStyle}
          source={require("../assets/images/Gradient_kykNqTa.png")}
        >
          <MaterialSearchBar3
            style={styles.materialSearchBar1}
          ></MaterialSearchBar3>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Result")}
              style={styles.button}
            >
              <View style={styles.materialButtonViolet1Stack}>
                <MaterialButtonViolet
                  caption="Current Location"
                  style={styles.materialButtonViolet1}
                ></MaterialButtonViolet>
                <FontAwesomeIcon
                  name="location-arrow"
                  style={styles.icon1}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Select")}
              style={styles.button2}
            >
              <View style={styles.materialButtonViolet2Stack}>
                <MaterialButtonViolet
                  caption="Select on Map"
                  style={styles.materialButtonViolet2}
                ></MaterialButtonViolet>
                <FeatherIcon name="map" style={styles.icon2}></FeatherIcon>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.group2}>
        <Text style={styles.recentSearches}>Recent Searches</Text>
        <View style={styles.group3}>
          <View style={styles.icon3Row}>
            <EntypoIcon name="location-pin" style={styles.icon3}></EntypoIcon>
            <Text style={styles.n13TaeWulGwan}>N13 Tae Wul Gwan</Text>
            <Text style={styles.loremIpsum2}>04.13</Text>
            <FeatherIcon name="x" style={styles.icon4}></FeatherIcon>
          </View>
          <View style={styles.rect2}></View>
        </View>
        <View style={styles.group4}>
          <View style={styles.icon5Row}>
            <EntypoIcon name="location-pin" style={styles.icon5}></EntypoIcon>
            <Text style={styles.loremIpsum3}>W6 Mir Hall, Narae Hall</Text>
            <Text style={styles.loremIpsum4}>04.02</Text>
            <FeatherIcon name="x" style={styles.icon6}></FeatherIcon>
          </View>
          <View style={styles.rect3}></View>
        </View>
        <View style={styles.group5}>
          <View style={styles.icon7Row}>
            <EntypoIcon name="location-pin" style={styles.icon7}></EntypoIcon>
            <Text style={styles.loremIpsum5}>
              E3 Information &amp; Electronics B/D
            </Text>
            <Text style={styles.loremIpsum6}>04.02</Text>
            <FeatherIcon name="x" style={styles.icon8}></FeatherIcon>
          </View>
          <View style={styles.rect4}></View>
        </View>
      </View>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter>
      <View style={styles.group10Row}>
        <View style={styles.group10}>
          <View style={styles.icon11Stack}>
            <IoniconsIcon
              name="md-restaurant"
              style={styles.icon11}
            ></IoniconsIcon>
            <MaterialButtonWithShadow
              caption="Restaurant"
              style={styles.materialButtonWithShadow2}
            ></MaterialButtonWithShadow>
          </View>
        </View>
        <View style={styles.group9}>
          <View style={styles.icon9Stack}>
            <IoniconsIcon name="ios-cafe" style={styles.icon9}></IoniconsIcon>
            <MaterialButtonWithShadow
              caption="Cafe"
              style={styles.materialButtonWithShadow}
            ></MaterialButtonWithShadow>
          </View>
        </View>
        <View style={styles.group8}>
          <View style={styles.materialButtonWithShadow1Stack}>
            <MaterialButtonWithShadow
              caption="Printer"
              style={styles.materialButtonWithShadow1}
            ></MaterialButtonWithShadow>
            <FeatherIcon name="printer" style={styles.icon10}></FeatherIcon>
          </View>
        </View>
        <View style={styles.group11}>
          <View style={styles.materialButtonWithShadow3Stack}>
            <MaterialButtonWithShadow
              caption="Printer"
              style={styles.materialButtonWithShadow3}
            ></MaterialButtonWithShadow>
            <EntypoIcon name="shop" style={styles.icon12}></EntypoIcon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group1: {
    width: 375,
    height: 193,
  },
  rect1: {
    width: 375,
    height: 193,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
  },
  rect1_imageStyle: {},
  materialSearchBar1: {
    height: 56,
    width: 375,
    marginTop: 63,
  },
  button: {
    width: 171,
    height: 50,
  },
  materialButtonViolet1: {
    height: 50,
    width: 171,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon1: {
    top: 15,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  materialButtonViolet1Stack: {
    width: 171,
    height: 50,
  },
  button2: {
    width: 169,
    height: 50,
    marginLeft: 9,
  },
  materialButtonViolet2: {
    height: 50,
    width: 169,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon2: {
    top: 15,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  materialButtonViolet2Stack: {
    width: 169,
    height: 50,
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 12,
    marginRight: 14,
  },
  group2: {
    width: 340,
    height: 158,
    marginTop: 96,
    marginLeft: 17,
  },
  recentSearches: {
    color: "#121212",
    marginLeft: 1,
  },
  group3: {
    width: 339,
    height: 40,
    marginTop: 26,
    marginLeft: 1,
  },
  icon3: {
    color: "#6e47e3",
    fontSize: 25,
  },
  n13TaeWulGwan: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 13,
    marginTop: 3,
  },
  loremIpsum2: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 115,
    marginTop: 5,
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 1,
  },
  icon3Row: {
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
  group4: {
    width: 339,
    height: 40,
    marginTop: 22,
  },
  icon5: {
    color: "#6e47e3",
    fontSize: 25,
  },
  loremIpsum3: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 13,
    marginTop: 3,
  },
  loremIpsum4: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 89,
    marginTop: 5,
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 1,
  },
  icon5Row: {
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
  group5: {
    width: 339,
    height: 40,
    marginTop: 23,
  },
  icon7: {
    color: "#6e47e3",
    fontSize: 25,
  },
  loremIpsum5: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 13,
    marginTop: 3,
  },
  loremIpsum6: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 28,
    marginTop: 5,
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 1,
  },
  icon7Row: {
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
  materialIconTextButtonsFooter1: {
    height: 81,
    width: 375,
    marginTop: 284,
  },
  group10: {
    width: 80,
    height: 36,
  },
  icon11: {
    top: 7,
    left: 16,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow2: {
    height: 36,
    width: 125,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon11Stack: {
    width: 125,
    height: 36,
  },
  group9: {
    width: 80,
    height: 36,
    marginLeft: 52,
  },
  icon9: {
    top: 7,
    left: 16,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow: {
    height: 36,
    width: 80,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon9Stack: {
    width: 80,
    height: 36,
  },
  group8: {
    width: 80,
    height: 36,
    marginLeft: 14,
  },
  materialButtonWithShadow1: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon10: {
    top: 9,
    left: 13,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow1Stack: {
    width: 100,
    height: 36,
  },
  group11: {
    width: 80,
    height: 36,
    marginLeft: 27,
  },
  materialButtonWithShadow3: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon12: {
    top: 9,
    left: 13,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow3Stack: {
    width: 100,
    height: 36,
  },
  group10Row: {
    height: 36,
    flexDirection: "row",
    marginTop: -593,
    marginLeft: 18,
    marginRight: -56,
  },
});

export default Select1;
