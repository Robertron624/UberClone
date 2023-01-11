import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import twrnc from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
// import { Icon } from '@rneui/themed';


const data = [
    {
        id: "123",
        title: "Get a ride!",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food!",
        image: "https://links.papareact.com/28w",
        screen: "MapScreen",
    },
];

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            data={data}
            keyExtractor={({item}) => item?.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={twrnc`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    onPress={() => navigation.navigate(item.screen)}
                    disabled={!origin}
                >
                    <View style={twrnc`${!origin && 'opacity-20'}`}>
                        <Image
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: "contain"
                        }}
                        source={{
                            uri: item.image
                        }} />
                        <Text style={twrnc`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            type="antdesign"
                            color="white"
                            name="arrowright"
                            style={twrnc`p-2 bg-black rounded-full w-10 mt-4`}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
