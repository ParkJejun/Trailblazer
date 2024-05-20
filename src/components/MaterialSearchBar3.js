import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyles, Color } from "../../GlobalStyles";

function MaterialSearchBar3(props) {
  const { placeholder, onSearch } = props; // 수정: 검색어 변경 콜백 함수 추가
  const [searchText, setSearchText] = useState("");

  // 검색어가 변경될 때 호출되는 함수
  const handleSearch = (text) => {
    setSearchText(text); // 검색어 상태 업데이트

    // 부모 컴포넌트로 검색어 전달
    if (props.onSearch) {
      props.onSearch(text);
    }
  };

  return (
    <View style={[GlobalStyles.searchContainer, props.style]}>
      <View style={GlobalStyles.searchBack}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Color.lightGray}
          style={styles.inputStyle}
          value={searchText}
          onChangeText={handleSearch}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SettingStack")}
          style={styles.leftIconButton}
        >
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={GlobalStyles.grayIcon}
            onPress={() => props.navigation.navigate("SettingStack")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightIconButton}
          onPress={handleSearch} // 수정: 검색 버튼 누를 때 검색어 전달
        >
          <MaterialCommunityIconsIcon
            name="magnify"
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
