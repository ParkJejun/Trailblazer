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
  <View style={styles.listItemRow}>
    <View>
      <Text style={styles.listText}>{item.departure}</Text>
      <Text style={styles.listText}>{" →   " + item.destination}</Text>
    </View>
    <FontAwesomeIcon name="star" style={styles.icon2}></FontAwesomeIcon>
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
        style={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon2: {
    color: Color.purple,
    fontSize: 25,
  },
  listItemRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listText: {
    ...GlobalStyles.body,
    marginTop: 5,
    marginBottom: 5,
  },
  listContainer: {
    margin: 20,
  },
});

export default Bookmark;
