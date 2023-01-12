import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements/dist/icons/Icon";
import twrnc from "tailwind-react-native-classnames";

const NavFavorites = () => {
    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: "Code Street, London, UK",
        },
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: "London Eye, London, UK",
        },
    ];

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item?.id}
            ItemSeparatorComponent={() => (
                <View style={[twrnc`bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={({ item }) => (
                <TouchableOpacity style={twrnc`flex-row items-center p-5`}>
                    <Icon
                        style={twrnc`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={twrnc`font-semibold text-lg`}>
                            {item.location}
                        </Text>
                        <Text style={twrnc`text-gray-500`}>
                            {item.destination}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavorites;

const styles = StyleSheet.create({});
