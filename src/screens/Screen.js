import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import Button from "../components/Button";

function Screen(props) {
  const [path, setPath] = useState();

  return (
    <View style={styles.container}>
      <MaterialMapView style={styles.materialMapView} path={path} />
      <Button style={styles.button} title="Show Path" setPath={setPath} />
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
