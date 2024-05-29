import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

function MaterialMapViewSelect(props) {
  const handleRegionChangeComplete = (region) => {
    props.setRegion(region);
  };

  return (
    <View style={[styles.container, props.style]}>
      <MapView
        style={styles.MapView1}
        initialRegion={{
          latitude: 36.3703,
          longitude: 127.36251,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChangeComplete={handleRegionChangeComplete}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  MapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)",
  },
});

export default MaterialMapViewSelect;
