import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { GlobalStyles } from "../../GlobalStyles";

function MaterialStackedLabelTextbox(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.value);
  }, []);

  return (
    <View style={[styles.container, props.style]}>
      <Text style={GlobalStyles.body2}>{props.label || "StackedLabel"}</Text>
      <TextInput
        value={value}
        style={styles.inputStyle}
        onChangeText={(text) => setValue(text)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default MaterialStackedLabelTextbox;
