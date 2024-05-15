import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

function SelectMap(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialMapViewStack}>
        <MaterialMapView style={styles.materialMapView}></MaterialMapView>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../assets/images/Gradient_kykNqTa.png")}
        >
          <Text style={styles.text}>Move the map to save the location</Text>
        </ImageBackground>
        <View gradientImage="Gradient_kykNqTa.png" style={styles.rect1}>
          <View style={styles.icon4Row}>
            <MaterialCommunityIconsIcon
              name="arrow-left"
              style={styles.icon4}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.loremIpsum}>Destination Selection</Text>
          </View>
        </View>
        <EntypoIcon name="location-pin" style={styles.icon3}></EntypoIcon>
        <View style={styles.group2}>
          <View gradientImage="Gradient_kykNqTa.png" style={styles.rect3}>
            <View style={styles.n13TaeWulGwanRow}>
              <Text style={styles.n13TaeWulGwan}>
                E3 Information {"\n"}&amp; Electronics B/D
              </Text>
              <TouchableOpacity style={styles.button3}>
                <View style={styles.ellipse4Stack}>
                  <Svg viewBox="0 0 44.51 44.51" style={styles.ellipse4}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(110,69,226,1)"
                      cx={22}
                      cy={22}
                      rx={22}
                      ry={22}
                    ></Ellipse>
                  </Svg>
                  <FontAwesomeIcon
                    name="long-arrow-right"
                    style={styles.icon9}
                  ></FontAwesomeIcon>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.text3}>
              A building containing laboratories and classrooms for{"\n"}the
              Department of Electrical and Electronic Engineering{"\n"}and
              Computer Science.
            </Text>
            <View style={styles.group1Row}>
              <View style={styles.group1}>
                <View style={styles.icon7Stack}>
                  <IoniconsIcon
                    name="ios-cafe"
                    style={styles.icon7}
                  ></IoniconsIcon>
                  <MaterialButtonWithShadow
                    caption="Cafe"
                    style={styles.materialButtonWithShadow1}
                  ></MaterialButtonWithShadow>
                </View>
              </View>
              <View style={styles.group3}>
                <View style={styles.materialButtonWithShadow2Stack}>
                  <MaterialButtonWithShadow
                    caption="Store"
                    style={styles.materialButtonWithShadow2}
                  ></MaterialButtonWithShadow>
                  <EntypoIcon name="shop" style={styles.icon10}></EntypoIcon>
                </View>
              </View>
            </View>
            <Text style={styles.editTheInformation}>Edit the information</Text>
          </View>
        </View>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 44.51 44.51" style={styles.ellipse2}>
              <Ellipse
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                cx={22}
                cy={22}
                rx={22}
                ry={22}
              ></Ellipse>
            </Svg>
            <Image
              source={require("../assets/images/자산_4target_icon_c.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialMapView: {
    width: 375,
    height: 812,
    position: "absolute",
    left: 0,
    top: 0,
  },
  rect2: {
    width: 350,
    height: 50,
    position: "absolute",
    top: 100,
    borderRadius: 15,
    left: 13,
    overflow: "hidden",
  },
  rect2_imageStyle: {},
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 16,
    marginLeft: 61,
  },
  rect1: {
    left: 0,
    width: 375,
    height: 91,
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 56,
    marginTop: 8,
  },
  icon4Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 103,
    marginLeft: 17,
    marginTop: 45,
  },
  icon3: {
    top: 263,
    left: 154,
    position: "absolute",
    color: "#b82c44",
    fontSize: 70,
  },
  group2: {
    top: 460,
    left: 17,
    width: 336,
    height: 250,
    position: "absolute",
  },
  rect3: {
    width: 336,
    height: 230,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30,
    marginTop: 20,
  },
  n13TaeWulGwan: {
    color: "#121212",
    lineHeight: 20,
    fontSize: 18,
    marginTop: 2,
  },
  button3: {
    width: 45,
    height: 45,
    marginLeft: 98,
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  icon9: {
    top: 7,
    left: 7,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
  ellipse4Stack: {
    width: 45,
    height: 45,
  },
  n13TaeWulGwanRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 28,
    marginRight: 27,
  },
  text3: {
    color: "#121212",
    opacity: 0.5,
    fontSize: 12,
    marginTop: 21,
    marginLeft: 28,
  },
  group1: {
    width: 80,
    height: 36,
  },
  icon7: {
    top: 7,
    left: 16,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow1: {
    height: 36,
    width: 80,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon7Stack: {
    width: 80,
    height: 36,
  },
  group3: {
    width: 80,
    height: 36,
    marginLeft: 24,
  },
  materialButtonWithShadow2: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon10: {
    top: 7,
    left: 13,
    position: "absolute",
    color: "#6e45e2",
    fontSize: 20,
  },
  materialButtonWithShadow2Stack: {
    width: 100,
    height: 36,
  },
  group1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 20,
    marginRight: 133,
  },
  editTheInformation: {
    color: "#121212",
    opacity: 0.5,
    fontSize: 12,
    marginTop: 14,
    marginLeft: 203,
  },
  materialIconTextButtonsFooter1: {
    height: 81,
    width: 375,
    position: "absolute",
    left: 0,
    top: 731,
  },
  button2: {
    top: 420,
    left: 281,
    width: 45,
    height: 45,
    position: "absolute",
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
  },
  image: {
    top: 6,
    left: 6,
    width: 32,
    height: 32,
    position: "absolute",
  },
  ellipse2Stack: {
    width: 45,
    height: 45,
  },
  materialMapViewStack: {
    width: 375,
    height: 812,
  },
});

export default SelectMap;
