// Setting.js

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import MaterialSearchBar from "../components/MaterialSearchBar";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Color, GlobalStyles } from "../utils/styles";
import Separator from "../components/Separator";
import RoundImageButton from "../components/RoundImageButton";
import GradientBox from "../components/GradientBox";
import { usePlaces } from "../hooks/usePlaces";
import { getData, removeData } from "../utils/storage";

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
          name="back-in-time"
          style={GlobalStyles.colorIcon}
        ></EntypoIcon>
        <View style={{ marginLeft: 10 }}>
          <Text style={GlobalStyles.listText}>{item.departure}</Text>
          <Text style={GlobalStyles.listText}>
            {" →   " + item.destination}
          </Text>
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
      <TouchableOpacity onPress={item.onPress}>
        <FeatherIcon name="x" style={GlobalStyles.grayListIcon}></FeatherIcon>
      </TouchableOpacity>
    </View>
  </View>
);

function Setting(props) {
  const [data, setData] = useState([]);

  const [refresh, setRefresh] = useState(0);

  const { places } = usePlaces();

  const handleSearchPress = (placeholder) => {
    console.log("Navigate to Select: " + placeholder);
    props.navigation.navigate("Select", { placeholder: { placeholder } });
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await getData("RecentPath");
      if (result === null) return;

      const newData = [];
      result.forEach((item, index) => {
        if (item.startId <= places.length && item.endId <= places.length) {
          newData.push({
            id: index,
            departure: places[item.startId - 1].englishName,
            destination: places[item.endId - 1].englishName,
            date: item.date,
            onPress: async () => {
              await removeData("RecentPath", index);
              setRefresh(refresh + 1);
            },
          });
        }
      });
      setData(newData);
    };
    fetch();
  }, [refresh, JSON.stringify(places)]);

  return (
    <View style={GlobalStyles.background}>
      <GradientBox height={200}>
        <View style={{ marginTop: 20 }}>
          <MaterialSearchBar
            placeholder="Departure"
            onSearchPress={handleSearchPress} // 수정된 부분
          />
          <MaterialSearchBar
            placeholder="Destination"
            onSearchPress={handleSearchPress} // 수정된 부분
          />
        </View>
        <View style={styles.button}>
          <RoundImageButton
            imageSource={require("../assets/images/자산_2switch_icon.png")}
          />
        </View>
      </GradientBox>
      <Text
        style={{
          ...GlobalStyles.body2,
          margin: 20,
          marginLeft: 35,
          marginBottom: 10,
        }}
      >
        Recent Path
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        style={GlobalStyles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: Color.gray,
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    top: 85,
    right: 50,
    width: 45,
    height: 45,
    position: "absolute",
    zIndex: 1,
  },
});

export default Setting;
