import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialSearchBar1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TextInput
          placeholder="Destination"
          style={styles.inputStyle1}
        ></TextInput>
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
    alignSelf: "flex-start",
    width: 245,
    lineHeight: 16,
    marginLeft: 15,
  },
});

export default MaterialSearchBar1;
