import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Color } from "../../GlobalStyles";

function MaterialSearchBar(props) {
  const { placeholder, navigation } = props; // props로 전달된 placeholder 값과 navigation 객체 가져오기

  // Search 버튼이 눌렸을 때 화면으로 이동하는 함수
  const handleSearchPress = () => {
    console.log("Navigate to Select");
    navigation.navigate("Select"); // Select 화면으로 이동
  };

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={handleSearchPress} // Search 버튼이 눌렸을 때 handleSearchPress 함수 호출
        style={styles.button}
      >
        <TextInput
          placeholder={placeholder} // 전달된 placeholder 값으로 설정
          placeholderTextColor={Color.lightGray}
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
