import React, { Component, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyles, Color } from "../../GlobalStyles";

function MaterialSearchBar2(props) {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={[GlobalStyles.searchContainer, props.style]}>
      <View style={GlobalStyles.searchBack}>
        <TextInput
          placeholder="Building"
          placeholderTextColor={Color.lightGray}
          style={styles.inputStyle1}
          value={searchText} // TextInput의 값은 상태로 설정
          onChangeText={(text) => setSearchText(text)} // 텍스트 변경 시 상태 업데이트
        ></TextInput>
        <TouchableOpacity onPress={() => setSearchText("")}>
          <Icon name="close" style={GlobalStyles.grayIcon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle1: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "center",
    width: 280,
    lineHeight: 16,
    marginLeft: 23,
  },
});

export default MaterialSearchBar2;
