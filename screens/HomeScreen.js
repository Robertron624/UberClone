import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import twrnc from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_KEY } from "@env"
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={twrnc` bg-white h-full`}>
            <View style={twrnc` p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder="Where from?"
                    onPress={(data, details=null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    returnKeyType={"search"}
                    fetchDetails={true}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18
                        }
                    }}
                    query={{
                        key: GOOGLE_MAPS_KEY,
                        language: 'en'
                    }}
                />

                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
