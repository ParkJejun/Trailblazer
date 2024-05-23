import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Color, GlobalStyles } from "../../GlobalStyles";
import Separator from "../components/Separator";
import { FlatList } from "react-native";
import { usePlaces } from "../hooks/usePlaces";
import { getData, removeData } from "../utils/storage";

const ListItem = ({ item }) => (
  <View style={GlobalStyles.listItemRow}>
    <View>
      <Text style={GlobalStyles.listText}>{item.departure}</Text>
      <Text style={GlobalStyles.listText}>{" →   " + item.destination}</Text>
    </View>
    <FontAwesomeIcon name="star" style={styles.icon}></FontAwesomeIcon>
  </View>
);

function Bookmark(props) {
  const [data, setData] = useState();

  const { places } = usePlaces();

  useEffect(() => {
    const fetch = async () => {
      const result = await getData("Bookmark");

      const data = [];
      result.forEach((item, index) => {
        data.push({
          id: index,
          departure: places[item.startId - 1].englishName,
          destination: places[item.endId - 1].englishName,
        });
      });
      setData(data);
    };
    if (places) {
      fetch();
    }
  }, [places]);

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
