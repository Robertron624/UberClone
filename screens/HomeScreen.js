import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import twrnc from "tailwind-react-native-classnames";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
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
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
