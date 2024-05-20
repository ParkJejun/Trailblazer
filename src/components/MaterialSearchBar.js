import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Color, GlobalStyles } from "../../GlobalStyles";

function MaterialSearchBar(props) {
  const { placeholder, navigation } = props; // props로 전달된 placeholder 값과 navigation 객체 가져오기

  // Search 버튼이 눌렸을 때 화면으로 이동하는 함수
  const handleSearchPress = (placeholder) => {
    console.log("Navigate to Select");
    navigation.navigate("Select", { placeholder }); // Select 화면으로 이동할 때 placeholder 전달
  };

  return (
    <TouchableOpacity
      onPress={handleSearchPress}
      style={[GlobalStyles.searchContainer, props.style]}
    >
      <View style={GlobalStyles.searchBack}>
        <TextInput
          editable={false} // TextInput을 비활성화합니다.
          placeholder={placeholder} // 전달된 placeholder 값으로 설정
          placeholderTextColor={Color.lightGray}
          style={styles.inputStyle}
        ></TextInput>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 45,
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
