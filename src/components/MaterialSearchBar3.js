import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBar3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <TextInput
            placeholder="Departure"
            style={styles.inputStyle1}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Setting")}
          style={styles.leftIconButton}
        >
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={styles.leftIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterialCommunityIconsIcon
            name="close"
            style={styles.rightIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  rect2: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    position: "absolute",
    borderRadius: 15,
    width: 350,
    height: 50,
    left: 4,
    top: 0,
  },
  inputStyle1: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 245,
    lineHeight: 16,
    marginLeft: 43,
    marginTop: 2,
  },
  leftIconButton: {
    padding: 11,
    position: "absolute",
    top: 1,
    left: 0,
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6,
  },
  rightIconButton: {
    padding: 11,
    position: "absolute",
    top: 1,
    right: 0,
    alignItems: "center",
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6,
  },
  rect2Stack: {
    width: 357,
    height: 50,
    marginTop: 3,
    marginLeft: 9,
  },
});

export default MaterialSearchBar3;
