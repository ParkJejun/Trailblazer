import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import { Color, GlobalStyles } from "../utils/styles";
import { usePlaces } from "../hooks/usePlaces";

function EditInfo(props) {
  const { id, name, englishName, buildingNum, latitude, longitude, tags } =
    props.route.params;

  const { places, updatePlace } = usePlaces();

  const handlePress = async (
    newName,
    newEnglishName,
    newBuildingNum,
    newLatitude,
    newLongitude,
    newTags
  ) => {
    if (
      places[id - 1].name !== newName ||
      places[id - 1].englishName !== newEnglishName ||
      places[id - 1].buildingNum !== newBuildingNum ||
      places[id - 1].latitude !== newLatitude ||
      places[id - 1].longitude !== newLongitude ||
      places[id - 1].tags !== newTags
    ) {
      console.log("updatePlace: " + id);
      await updatePlace({
        id,
        newName,
        newEnglishName,
        newBuildingNum,
        newLatitude,
        newLongitude,
        newTags,
      });
    }
    props.navigation.goBack();
  };

  return (
    <View style={GlobalStyles.background}>
      <View style={styles.row}>
        <MaterialCommunityIconsIcon
          name="office-building"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <View>
          <MaterialStackedLabelTextbox
            label="Building number"
            value={buildingNum}
            style={styles.materialStackedLabelTextbox}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Building name"
            value={englishName}
            style={styles.materialStackedLabelTextbox}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Description"
            value="Description"
            style={styles.materialStackedLabelTextbox}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Tags"
            value={tags}
            style={styles.materialStackedLabelTextbox}
          ></MaterialStackedLabelTextbox>
        </View>
      </View>
      <MaterialButtonViolet1
        caption="Save"
        style={styles.materialButtonViolet1}
        onPress={() => console.log("Button pressed")}
      ></MaterialButtonViolet1>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    margin: 20,
  },
  materialStackedLabelTextbox: {
    width: 300,
    height: 50,
    overflow: "hidden",
    alignSelf: "center",
  },
  icon: {
    color: Color.gray,
    fontSize: 40,
    marginRight: 20,
  },
  materialButtonViolet1: {
    height: 36,
    width: 100,
    borderRadius: 20,
    alignSelf: "center",
  },
});

export default EditInfo;
