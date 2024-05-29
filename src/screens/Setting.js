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
import { useRefresh } from "../hooks/useRefresh";
import { getData, removeData } from "../utils/storage";

const ListItem = ({ item }) => (
  <TouchableOpacity onPress={item.handlePress} style={GlobalStyles.listItemRow}>
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
      <TouchableOpacity onPress={item.handleRemovePress}>
        <FeatherIcon name="x" style={GlobalStyles.grayListIcon}></FeatherIcon>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

function Setting(props) {
  const [data, setData] = useState([]);

  const { refresh, setRefresh } = useRefresh();

  const { places } = usePlaces();

  const params = props.route.params;

  const [ids, setIds] = useState({
    startId: params?.startId ?? -1,
    endId: params?.endId ?? -1,
  });

  useEffect(() => {
    setIds({
      startId: params?.startId ?? -1,
      endId: params?.endId ?? -1,
    });
  }, [params]);

  const handleSearchPress = (type) => {
    props.navigation.navigate("Select", {
      type: type,
      startId: ids.startId,
      endId: ids.endId,
    });
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
            handlePress: () =>
              props.navigation.navigate("Result", {
                startId: item.startId,
                endId: item.endId,
              }),
            handleRemovePress: async () => {
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
            type="Departure"
            placeholder={
              ids.startId > 0
                ? places[ids.startId - 1]?.englishName ?? "Departure"
                : "Departure"
            }
            onSearchPress={() => handleSearchPress("Departure")}
          />
          <MaterialSearchBar
            type="Destination"
            placeholder={
              ids.endId > 0
                ? places[ids.endId - 1]?.englishName ?? "Destination"
                : "Destination"
            }
            onSearchPress={() => handleSearchPress("Destination")}
          />
        </View>
        <View style={styles.button}>
          <RoundImageButton
            onPress={() => setIds({ startId: ids.endId, endId: ids.startId })}
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
