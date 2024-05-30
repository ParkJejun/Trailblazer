import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import { Color, GlobalStyles } from "../utils/styles";
import { usePlaces } from "../hooks/usePlaces";

function EditInfo(props) {
  const { id, name, englishName, buildingNum, latitude, longitude, tags } =
    props.route.params;

  const { places, updatePlace } = usePlaces();

  const [newName, setNewName] = useState(name);
  const [newEnglishName, setNewEnglishName] = useState(englishName);
  const [newBuildingNum, setNewBuildingNum] = useState(buildingNum);
  const [newLatitude, setNewLatitude] = useState(latitude);
  const [newLongitude, setNewLongitude] = useState(longitude);
  const [newTags, setNewTags] = useState(tags);

  const handlePress = async () => {
    if (
      places[id - 1].name !== newName ||
      places[id - 1].englishName !== newEnglishName ||
      places[id - 1].buildingNum !== newBuildingNum ||
      places[id - 1].latitude != newLatitude ||
      places[id - 1].longitude != newLongitude ||
      places[id - 1].tags !== newTags
    ) {
      // check if latitude and longitude are valid
      // TODO: handle invalid input
      if (
        isNaN(newLatitude) ||
        Number(newLatitude) < -90 ||
        Number(newLatitude) > 90
      ) {
        console.log("Invalid latitude");
        return;
      }
      if (
        isNaN(newLongitude) ||
        Number(newLongitude) < -180 ||
        Number(newLongitude) > 180
      ) {
        console.log("Invalid longitude");
        return;
      }

      await updatePlace(
        id,
        newName,
        newEnglishName,
        newBuildingNum,
        newLatitude,
        newLongitude,
        newTags
      );
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
            label="Building name"
            value={name}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewName}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Building name"
            value={englishName}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewEnglishName}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Building number"
            value={buildingNum}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewBuildingNum}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Latitude"
            value={latitude.toString()}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewLatitude}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Longitude"
            value={longitude.toString()}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewLongitude}
          ></MaterialStackedLabelTextbox>
          <MaterialStackedLabelTextbox
            label="Tags"
            value={tags}
            style={styles.materialStackedLabelTextbox}
            setValue={setNewTags}
          ></MaterialStackedLabelTextbox>
        </View>
      </View>
      <MaterialButtonViolet1
        caption="Save"
        style={styles.materialButtonViolet1}
        onPress={handlePress}
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
