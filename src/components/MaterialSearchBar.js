import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Select")}
        style={styles.button}
      >
        <TextInput
          placeholder="Departure"
          style={styles.inputStyle}
        ></TextInput>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 15,
    width: 350,
    height: 50,
    alignSelf: "center",
  },
  inputStyle: {
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

export default MaterialSearchBar;
