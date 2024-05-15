import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBar2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TextInput
          placeholder="Building"
          style={styles.inputStyle1}
        ></TextInput>
        <View style={styles.inputStyle1Filler}></View>
        <TouchableOpacity style={styles.rightIconButton1}>
          <Icon name="close" style={styles.rightIcon2}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: "center",
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 15,
    width: 350,
    height: 50,
    alignSelf: "center",
  },
  inputStyle1: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "center",
    width: 245,
    lineHeight: 16,
    marginLeft: 23,
  },
  inputStyle1Filler: {
    flex: 1,
    flexDirection: "row",
  },
  rightIconButton1: {
    padding: 11,
    alignItems: "center",
    marginRight: 3,
    marginTop: 1,
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6,
  },
});

export default MaterialSearchBar2;
