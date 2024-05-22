import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Color, GlobalStyles } from "../../GlobalStyles";
import Separator from "../components/Separator";
import { FlatList } from "react-native";

const data = [];

for (let i = 1; i <= 20; i++) {
  data.push({
    id: i.toString(),
    departure: `Departure ${i}`,
    destination: `Destination ${i}`,
  });
}

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
