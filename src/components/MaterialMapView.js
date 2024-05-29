import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

function MaterialMapView(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MapView
        style={styles.MapView1}
        initialRegion={{
          latitude: props.path ? props.path[0].latitude : 36.3703,
          longitude: props.path ? props.path[0].longitude : 127.36251,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {!props.loading && props.path ? (
          <Marker
            coordinate={{
              latitude: props.path[0].latitude,
              longitude: props.path[0].longitude,
            }}
            pinColor="green"
          />
        ) : null}
        {!props.loading && props.path ? (
          <Marker
            coordinate={{
              latitude: props.path[props.path.length - 1].latitude,
              longitude: props.path[props.path.length - 1].longitude,
            }}
            pinColor="red"
          />
        ) : null}
        {!props.loading && props.path ? (
          <Polyline
            coordinates={props.path}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              "#7F0000",
              "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
              "#B24112",
              "#E5845C",
              "#238C23",
              "#7F0000",
            ]}
            strokeWidth={4}
          />
        ) : null}
      </MapView>
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

export default MaterialMapView;
