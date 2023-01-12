import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import twrnc from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements/dist/icons/Icon";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
            <View>
                <TouchableOpacity
                    style={twrnc`absolute top-16 left-5 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}
                    onPress={() => navigation.navigate("HomeScreen")}
                >
                    <Icon name="menu" />
                </TouchableOpacity>

                <View style={twrnc`h-1/2`}>
                    <Map />
                </View>
                <View style={twrnc`h-1/2`}>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="NavigateCard"
                            component={NavigateCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="RideOptionsCard"
                            component={RideOptionsCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
