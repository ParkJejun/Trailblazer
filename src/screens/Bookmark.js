import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Color, GlobalStyles } from "../utils/styles";
import Separator from "../components/Separator";
import { FlatList } from "react-native";
import { usePlaces } from "../hooks/usePlaces";
import { useRefresh } from "../hooks/useRefresh";
import { getData, removeData } from "../utils/storage";

const ListItem = ({ item }) => (
  <View style={GlobalStyles.listItemRow}>
    <View>
      <Text style={GlobalStyles.listText}>{item.departure}</Text>
      <Text style={GlobalStyles.listText}>{" →   " + item.destination}</Text>
    </View>
    <TouchableOpacity onPress={item.onPress}>
      <FontAwesomeIcon name="star" style={styles.icon}></FontAwesomeIcon>
    </TouchableOpacity>
  </View>
);

function Bookmark(props) {
  const [data, setData] = useState([]);

  const { refresh, setRefresh } = useRefresh();

  const { places } = usePlaces();

  useEffect(() => {
    const fetch = async () => {
      const result = await getData("Bookmark");
      if (result === null) return;

      const newData = [];
      result.forEach((item, index) => {
        if (item.startId <= places.length && item.endId <= places.length) {
          newData.push({
            id: index,
            departure: places[item.startId - 1].englishName,
            destination: places[item.endId - 1].englishName,
            onPress: async () => {
              await removeData("Bookmark", index);
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
    color: Color.purple,
    fontSize: 25,
  },
});

export default Bookmark;
