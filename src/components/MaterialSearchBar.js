import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Color, GlobalStyles } from "../utils/styles";

function MaterialSearchBar(props) {
  const { placeholder, onSearchPress } = props; // 수정된 부분

  const handleSearchPress = () => {
    if (onSearchPress) onSearchPress(placeholder); // 수정된 부분
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
