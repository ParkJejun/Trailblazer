import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import MaterialSearchBar3 from "../components/MaterialSearchBar3";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import { GlobalStyles } from "../../GlobalStyles";
import Separator from "../components/Separator";
import GradientBox from "../components/GradientBox";

const recentData = [];
const matchingData = [];

for (let i = 1; i <= 20; i++) {
  recentData.push({
    id: i.toString(),
    text: `RBuilding ${i}`,
    date: `05.${String(i).padStart(2, "0")}`,
  });
}
for (let i = 1; i <= 20; i++) {
  matchingData.push({
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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={GlobalStyles.body2}>{item.date} </Text>
    </View>
  </View>
);

const tags = [
  {
    id: "1",
    icon: "silverware-fork-knife",
    caption: "Restaurant",
  },
  {
    id: "2",
    icon: "coffee",
    caption: "Cafe",
  },
  {
    id: "3",
    icon: "printer",
    caption: "Printer",
  },
  {
    id: "4",
    icon: "store",
    caption: "Store",
  },
];

const tagItem = ({ item }) => (
  <View style={GlobalStyles.listItemRow}>
    <MaterialButtonWithShadow
      icon={item.icon}
      caption={item.caption}
      style={{ height: 40 }}
    ></MaterialButtonWithShadow>
  </View>
);

function Select(props) {
  const { placeholder } = props;
  const [searchText, setSearchText] = useState(""); // 검색어 상태

  // MaterialSearchBar3에서 검색어가 변경될 때 호출되는 함수
  const handleSearch = (text) => {
    setSearchText(text); // 검색어 상태 업데이트
  };

  // 검색어를 포함한 결과를 반환하는 함수
  const getFilteredData = () => {
    if (searchText.trim() === "") {
      // 검색어가 없는 경우 recentData 반환
      return recentData;
    } else {
      // 검색어가 있는 경우 matchingData에서 검색어를 포함하는 결과 반환
      return matchingData.filter((item) =>
        item.text.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  };

  return (
    <View style={GlobalStyles.background}>
      <GradientBox height={200}>
        <View style={{ marginTop: 20 }}>
          <MaterialSearchBar3
            placeholder={placeholder}
            navigation={props.navigation}
            onSearch={handleSearch} // 검색어가 변경될 때 호출되는 콜백 함수 전달
          ></MaterialSearchBar3>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Result")}>
            <MaterialButtonViolet
              caption="Current Location"
              icon="location-arrow"
            ></MaterialButtonViolet>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("navigate to SelectMap")}
          >
            <MaterialButtonViolet
              caption="Select on Map"
              icon="map"
            ></MaterialButtonViolet>
          </TouchableOpacity>
        </View>
      </GradientBox>
      <View
        style={{
          ...GlobalStyles.listContainer,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={tags}
          renderItem={tagItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={{ ...GlobalStyles.body2, marginLeft: 35, marginBottom: 10 }}>
        {searchText ? "Matching Results" : "Recent Searches"}
      </Text>
      <FlatList
        data={getFilteredData()} // 검색어에 따라 필터된 데이터를 보여줌
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        style={GlobalStyles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  materialSearchBar1: {
    height: 56,
    width: 375,
    marginTop: 63,
  },
  buttonRow: {
    height: 50,
    width: 350,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Select;
