import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import twrnc from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements/dist/icons/Icon";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={twrnc`bg-white flex-1`}>
            <Text style={twrnc`text-center py-5 text-xl`}>Good morning</Text>
            <View style={twrnc`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        debounce={400}
                        minLength={2}
                        query={{
                            key: GOOGLE_MAPS_KEY,
                            language: "en",
                        }}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                })
                            );

                            navigation.navigate("RideOptionsCard");
                        }}
                        styles={toInputBoxStyles}
                    />
                </View>
                <NavFavorites />
            </View>
            <View
                style={twrnc`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
            >
                <TouchableOpacity
                    style={twrnc`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
                    onPress={()=> navigation.navigate("RideOptionsCard")}
                >
                    <Icon
                        name="car"
                        type="font-awesome"
                        color="white"
                        size={16}
                    />
                    <Text style={twrnc`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={twrnc`flex flex-row w-24 px-4 py-3 rounded-full`}
                >
                    <Icon
                        name="fast-food-outline"
                        type="ionicon"
                        color="black"
                        size={16}
                    />
                    <Text style={twrnc`text-black text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
