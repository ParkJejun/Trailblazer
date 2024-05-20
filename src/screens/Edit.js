import React, { Component } from "react";
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
  return (
    <View style={GlobalStyles.background}>
      <GradientBox height={90}>
        <MaterialSearchBar2
          style={styles.materialSearchBar2}
        ></MaterialSearchBar2>
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
  materialSearchBar2: {
    height: 50,
    width: 350,
  },
});

export default Edit;
