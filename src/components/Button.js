import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button(props) {
  const onPress = () => {
    //
  };

  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={onPress}>
      <Text style={styles.caption}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CD964",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#fff",
    fontSize: 17,
  },
});

export default Button;
