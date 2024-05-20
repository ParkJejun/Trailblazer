import React, { Component, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyles, Color } from "../../GlobalStyles";

function MaterialSearchBar3(props) {
  const { placeholder, navigation } = props;
  const [searchText, setSearchText] = useState(""); // 상태 추가

  return (
    <View style={[GlobalStyles.searchContainer, props.style]}>
      <View style={GlobalStyles.searchBack}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Color.lightGray}
          style={styles.inputStyle}
          value={searchText} // TextInput의 값은 상태로 설정
          onChangeText={(text) => setSearchText(text)} // 텍스트 변경 시 상태 업데이트
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Setting")}
          style={styles.leftIconButton}
        >
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={GlobalStyles.grayIcon}
            onPress={() => navigation.navigate("Setting")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightIconButton}
          onPress={() => setSearchText("")}
        >
          <MaterialCommunityIconsIcon
            name="close"
            style={GlobalStyles.grayIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
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
    marginLeft: 50,
  },
  leftIconButton: {
    position: "absolute",
    left: 5,
  },
  rightIconButton: {
    position: "absolute",
    right: 5,
  },
});

export default MaterialSearchBar3;
