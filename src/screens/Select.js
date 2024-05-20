import React, { Component } from "react";
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

const data = [];

for (let i = 1; i <= 20; i++) {
  data.push({
    id: i.toString(),
    text: `Building ${i}`,
    date: `05.${String(i).padStart(2, "0")}`,
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
  console.log("Select received" + placeholder);
  return (
    <View style={GlobalStyles.background}>
      <GradientBox height={200}>
        <View style={{ marginTop: 20 }}>
          <MaterialSearchBar3
            placeholder={placeholder}
            navigation={props.navigation}
          ></MaterialSearchBar3>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Result")}
            style={styles.button}
          >
            <MaterialButtonViolet
              caption="Current Location"
              icon="location-arrow"
            ></MaterialButtonViolet>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SelectMap")}
            style={styles.button2}
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
        Recent Searches
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
  materialSearchBar1: {
    height: 56,
    width: 375,
    marginTop: 63,
  },
  button: {
    width: 171,
    height: 50,
  },
  button2: {
    width: 169,
    height: 50,
    marginLeft: 9,
  },
  buttonRow: {
    height: 50,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Select;
