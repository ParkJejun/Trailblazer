import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function EditInfo(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter>
      <View gradientImage="Gradient_kykNqTa.png" style={styles.rect1}>
        <View style={styles.icon1Row}>
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.editMap}>Edit Map</Text>
        </View>
      </View>
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <MaterialStackedLabelTextbox
            label="Building number"
            inputStyle="E3"
            style={styles.materialStackedLabelTextbox3}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Building name"
            inputStyle="Information & Electronics B/D"
            style={styles.materialStackedLabelTextbox4}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="description"
            inputStyle="A building containing laboratories and classrooms for the Department of Electrical and Electronic Engineering and Computer Science."
            style={styles.materialStackedLabelTextbox5}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Tags"
            inputStyle="Cafe,"
            style={styles.materialStackedLabelTextbox2}
          ></MaterialStackedLabelTextbox>
        </View>
        <MaterialCommunityIconsIcon
          name="office-building"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.icon3Row}>
        <IoniconsIcon name="ios-cafe" style={styles.icon3}></IoniconsIcon>
        <View style={styles.group1}>
          <MaterialStackedLabelTextbox
            label="Cafe name"
            inputStyle="Pascucci"
            style={styles.materialStackedLabelTextbox6}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="located floor"
            inputStyle="1"
            style={styles.materialStackedLabelTextbox7}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Representative menu"
            inputStyle="Panini, americano,"
            style={styles.materialStackedLabelTextbox8}
          ></MaterialStackedLabelTextbox>
        </View>
      </View>
      <MaterialButtonViolet1
        caption="Save"
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
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
  rect1: {
    width: 375,
    height: 91,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: -812,
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
  group: {
    top: 0,
    left: 38,
    width: 320,
    height: 249,
    position: "absolute",
    justifyContent: "space-between",
  },
  materialStackedLabelTextbox3: {
    width: 280,
    height: 60,
    alignSelf: "center",
  },
  materialStackedLabelTextbox4: {
    height: 60,
    width: 280,
    overflow: "hidden",
    alignSelf: "center",
  },
  materialStackedLabelTextbox5: {
    height: 60,
    width: 280,
    overflow: "hidden",
    alignSelf: "center",
  },
  materialStackedLabelTextbox2: {
    width: 280,
    height: 60,
    alignSelf: "center",
  },
  icon2: {
    top: 13,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  groupStack: {
    width: 358,
    height: 249,
    marginLeft: 17,
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 15,
  },
  group1: {
    width: 318,
    height: 189,
    justifyContent: "space-between",
    marginLeft: 4,
  },
  materialStackedLabelTextbox6: {
    width: 280,
    height: 60,
    alignSelf: "center",
  },
  materialStackedLabelTextbox7: {
    height: 60,
    width: 280,
    overflow: "hidden",
    alignSelf: "center",
  },
  materialStackedLabelTextbox8: {
    height: 60,
    width: 280,
    overflow: "hidden",
    alignSelf: "center",
  },
  icon3Row: {
    height: 189,
    flexDirection: "row",
    marginTop: 51,
    marginLeft: 20,
  },
  materialButtonViolet1: {
    height: 36,
    width: 100,
    borderRadius: 20,
    marginTop: 61,
    alignSelf: "center",
  },
});

export default EditInfo;
