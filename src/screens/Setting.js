import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialSearchBar from "../components/MaterialSearchBar";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Color, GlobalStyles } from "../../GlobalStyles";
import Separator from "../components/Separator";
import RoundImageButton from "../components/RoundImageButton";

const data = [];

for (let i = 1; i <= 20; i++) {
  data.push({
    id: i.toString(),
    departure: `Departure ${i}`,
    destination: `Destination ${i}`,
    date: `05.${String(i).padStart(2, "0")}`,
  });
}

const ListItem = ({ item }) => (
  <View style={styles.listItemRow}>
    <View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
        }}
      >
        <EntypoIcon name="back-in-time" style={styles.icon4}></EntypoIcon>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.listText}>{item.departure}</Text>
          <Text style={styles.listText}>{" →   " + item.destination}</Text>
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
      <FeatherIcon name="x" style={styles.icon3}></FeatherIcon>
    </View>
  </View>
);

function Setting(props) {
  return (
    <View style={GlobalStyles.background}>
      <ImageBackground
        style={styles.rect1}
        imageStyle={styles.rect1_imageStyle}
        source={require("../assets/images/Gradient_kykNqTa.png")}
      >
        <MaterialSearchBar
          placeholder="Departure"
          style={styles.departure}
          navigation={props.navigation} // navigation prop 전달
        ></MaterialSearchBar>
        <MaterialSearchBar
          placeholder="Destination"
          style={styles.destination}
          navigation={props.navigation} // navigation prop 전달
        ></MaterialSearchBar>
        <View style={styles.button}>
          <RoundImageButton
            imageSource={require("../assets/images/자산_2switch_icon.png")}
            style={{ position: "absolute", top: 75, right: 50 }}
          />
        </View>
      </ImageBackground>
      <Text style={{ ...GlobalStyles.body2, margin: 20, marginBottom: 10 }}>
        Recent Path
      </Text>
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
  rect1: {
    width: "100%",
    height: 200,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  rect1_imageStyle: { resizeMode: "stretch" },
  destination: {
    height: 56,
    width: 375,
  },
  button: {
    top: 75,
    right: 50,
    width: 45,
    height: 45,
    position: "absolute",
    zIndex: 1,
  },
  destinationStack: {
    width: 375,
    height: 79,
    marginTop: 93,
  },
  departure: {
    width: 375,
    height: 56,
  },
  rect1Stack: {
    width: 376,
    height: 193,
    marginLeft: -1,
  },
  group5: {
    width: 340,
    height: 158,
    marginTop: -605,
    marginLeft: 17,
  },
  group2: {
    width: 339,
    height: 40,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 1,
  },
  icon2: {
    color: "#6e47e3",
    fontSize: 25,
    marginTop: 7,
  },
  loremIpsum: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 12,
  },
  loremIpsum2: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 29,
    marginTop: 12,
  },
  icon3: {
    color: Color.gray,
    fontSize: 25,
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
  },
  rect2: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 11,
    marginLeft: 1,
  },
  group3: {
    width: 339,
    height: 40,
    flexDirection: "row",
    marginTop: 11,
  },
  icon4: {
    color: "#6e47e3",
    fontSize: 25,
    marginTop: 7,
  },
  loremIpsum3: {
    color: "#121212",
    lineHeight: 20,
    marginLeft: 12,
  },
  loremIpsum4: {
    color: "#121212",
    opacity: 0.5,
    marginLeft: 13,
    marginTop: 12,
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginLeft: 9,
    marginTop: 8,
  },
  icon4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
  },
  rect3: {
    width: 339,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 11,
    marginLeft: 1,
  },
});

export default Setting;
