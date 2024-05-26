import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import TransparentGradientBox from "../components/TransparentGradientBox";
import { GlobalStyles, Color } from "../../GlobalStyles";
import WhiteBox from "../components/WhiteBox";
import RoundIconButton from "../components/RoundIconButton";
import RoundImageButton from "../components/RoundImageButton";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = {
  name: "E3 Information & Electronics B/D",
  description:
    "A building containing laboratories and classrooms for the Department of Electrical and Electronic Engineering and Computer Science.",
};

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

function SelectMap(props) {
  const [whiteBoxHeight, setWhiteBoxHeight] = useState(0);
  const whiteBoxRef = useRef(null);

  const onWhiteBoxLayout = () => {
    if (whiteBoxRef.current) {
      whiteBoxRef.current.measure((x, y, width, height, pageX, pageY) => {
        setWhiteBoxHeight(height);
        // console.log("whiteBoxHeight: " + height);
        // console.log(whiteBoxHeight);
      });
    }
  };

  return (
    <View style={GlobalStyles.background}>
      <View>
        <MaterialMapView
          style={{ height: "100%", width: "100%" }}
        ></MaterialMapView>
        <View style={styles.wrap}>
          <TransparentGradientBox height={60}>
            <Text style={{ ...GlobalStyles.h3, color: "white" }}>
              Move the map to save the location
            </Text>
          </TransparentGradientBox>
          <EntypoIcon name="location-pin" style={styles.loc_icon}></EntypoIcon>

          <View style={{ flex: 1 }} />
          <View
            style={{
              position: "absolute",
              right: 30,
              bottom: whiteBoxHeight + 200,
            }}
          >
            <RoundIconButton
              onPress={() => console.log("Button pressed")}
              icon={
                <MaterialCommunityIcons
                  name="target"
                  style={styles.target_icon}
                />
              }
              backgroundColor="white"
            />
          </View>

          <WhiteBox>
            <View
              style={{ flexDirection: "row", margin: 20 }}
              onLayout={onWhiteBoxLayout}
              ref={whiteBoxRef}
            >
              <Text
                style={{ ...GlobalStyles.h2, flex: 1, whiteSpace: "nowrap" }}
              >
                {data.name}
              </Text>
              <View style={{ marginLeft: 30 }}>
                <RoundIconButton
                  icon={
                    <FontAwesomeIcon
                      name="long-arrow-right"
                      style={styles.arrow_icon}
                    />
                  }
                />
              </View>
            </View>
            <Text
              style={{
                ...GlobalStyles.body2,
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              {data.description}
            </Text>
            <View
              style={{
                margin: 20,
                marginBottom: 0,
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
            <TouchableOpacity onPress={() => props.navigation.navigate("Edit")}>
              <Text
                style={{
                  ...GlobalStyles.body2,
                  margin: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  textAlign: "right",
                }}
              >
                Edit the information
              </Text>
            </TouchableOpacity>
          </WhiteBox>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  target_icon: {
    color: Color.purple,
    fontSize: 35,
  },
  arrow_icon: {
    color: "white",
    fontSize: 35,
  },
  wrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  loc_icon: {
    position: "absolute",
    alignSelf: "center",
    top: "30%",
    color: Color.purple,
    fontSize: 70,
  },
});

export default SelectMap;
