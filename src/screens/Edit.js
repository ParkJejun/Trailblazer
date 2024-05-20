import React, { Component, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MaterialSearchBar2 from "../components/MaterialSearchBar2";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Separator from "../components/Separator";
import GradientBox from "../components/GradientBox";
import { GlobalStyles } from "../../GlobalStyles";

const data = [];

for (let i = 1; i <= 20; i++) {
  data.push({
    id: i.toString(),
    text: `Building ${i}`,
  });
}

const ListItem = ({ item }) => (
  <View style={GlobalStyles.listItemRow}>
    <View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
        }}
      >
        <EntypoIcon
          name="location-pin"
          style={GlobalStyles.colorIcon}
        ></EntypoIcon>
        <View style={{ marginLeft: 10 }}>
          <Text style={GlobalStyles.listText}>{item.text}</Text>
        </View>
      </View>
    </View>
  </View>
);

function Edit(props) {
  const [searchText, setSearchText] = useState(""); // MaterialSearchBar2의 value 상태

  // MaterialSearchBar2의 값이 변경될 때 호출되는 함수
  const handleSearch = (text) => {
    setSearchText(text); // 검색어를 상태에 설정
  };

  // 검색어를 포함하는 데이터만 필터링하여 반환하는 함수
  const filterData = () => {
    return data.filter((item) => item.text.includes(searchText));
  };

  return (
    <View style={GlobalStyles.background}>
      <GradientBox height={90}>
        <MaterialSearchBar2
          style={styles.materialSearchBar2}
          onSearch={handleSearch} // 검색어 입력 시 호출되는 함수 전달
        />
      </GradientBox>
      <Text
        style={{
          ...GlobalStyles.body2,
          margin: 20,
          marginLeft: 35,
          marginBottom: 10,
        }}
      >
        Matching Results
      </Text>
      <FlatList
        data={filterData()} // 필터링된 데이터를 FlatList에 전달
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        style={GlobalStyles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  materialSearchBar2: {
    height: 50,
    width: 350,
  },
});

export default Edit;
