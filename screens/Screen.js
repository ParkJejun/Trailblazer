import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import Button from "../components/Button";

function Screen(props) {
  const [showPath, setShowPath] = useState(false);

  return (
    <View style={styles.container}>
      <MaterialMapView style={styles.materialMapView} showPath={showPath} />
      <Button
        style={styles.button}
        title="Show Path"
        onPress={() => {
          setShowPath(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialMapView: {
    width: 339,
    height: 446,
    marginTop: 269,
    marginLeft: 9,
  },
  button: {
    height: 44,
    width: 150,
    marginTop: -666,
    marginLeft: 44,
  },
});

export default Screen;
