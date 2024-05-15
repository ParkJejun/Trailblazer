import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Bookmark(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <View style={styles.group5Stack}>
        <View style={styles.group5}>
          <View style={styles.group2}>
            <View style={styles.loremIpsumRow}>
              <Text style={styles.loremIpsum}>
                E3 Information &amp; Electronics B/D{"\n"}→ N13 Tae Wul Gwan
              </Text>
              <FontAwesomeIcon
                name="star"
                style={styles.icon2}
              ></FontAwesomeIcon>
            </View>
          </View>
          <View style={styles.rect2}></View>
          <View style={styles.group3}>
            <View style={styles.loremIpsum3Row}>
              <Text style={styles.loremIpsum3}>
                W6 Mir Hall, Narae Hall{"\n"}→ E3 Information &amp; Electronics
                B/D
              </Text>
              <FontAwesomeIcon
                name="star"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
          </View>
          <View style={styles.rect3}></View>
        </View>
        <View gradientImage="Gradient_kykNqTa.png" style={styles.rect4}>
          <View style={styles.icon5Row}>
            <MaterialCommunityIconsIcon
              name="arrow-left"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.bookmarked3}>Bookmarked</Text>
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
  materialIconTextButtonsFooter: {
    height: 81,
    width: 375,
    marginTop: 731,
  },
  group5: {
    top: 80,
    left: 17,
    width: 340,
    height: 158,
    position: "absolute",
  },
  group2: {
    width: 339,
    height: 40,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 1,
  },
  loremIpsum: {
    color: "#121212",
    lineHeight: 20,
  },
  icon2: {
    color: "#6e47e3",
    fontSize: 25,
    marginLeft: 110,
    marginTop: 7,
  },
  loremIpsumRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
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
  loremIpsum3: {
    color: "#121212",
    lineHeight: 20,
  },
  icon4: {
    color: "#6e47e3",
    fontSize: 25,
    marginLeft: 94,
    marginTop: 7,
  },
  loremIpsum3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
  },
  rect3: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 11,
    marginLeft: 1,
  },
  rect4: {
    left: 0,
    width: 375,
    height: 91,
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
  },
  bookmarked3: {
    color: "#121212",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 90,
    marginTop: 5,
  },
  icon5Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 137,
    marginLeft: 17,
    marginTop: 45,
  },
  group5Stack: {
    width: 375,
    height: 238,
    marginTop: -812,
  },
});

export default Bookmark;
