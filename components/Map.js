import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import twrnc from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {

    const origin = useSelector(selectOrigin)

    return (
        <MapView
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
            mapType="mutedStandard"
            style={twrnc`flex-1 ml-5`}
        >
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({});
