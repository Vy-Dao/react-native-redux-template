import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore, RootState} from "./redux/store";
import { AddNumber, ClearNumber, MinusNumber } from "./redux/ults";

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Profile Screen!</Text>
            <Button title="Go to Home Screen" onPress={() => navigation.navigate("Home")} />
            
        </View>
    );
};

const HomeScreen = ({ navigation }) =>  {
    const dispatch = useDispatch();

    const theNumber = useSelector((state: RootState) : number => state.counting.count);

    return (
        <View style={styles.container}>
            <Text>Welcome to React Native Home Screen!</Text>
            <Text>{theNumber}</Text>
            <Button title="Up" onPress={() => dispatch(AddNumber(1))}/>
            <Button title="Down" onPress={() => dispatch(MinusNumber(1))}/>
            <Button title="Clear" onPress={() => dispatch(ClearNumber())}/>
            <View>
            <Button title="Go to Profile Screen" onPress={() => navigation.navigate("Profile")} />
            </View>
        </View>
    );
};

const Stack = createStackNavigator();

const store = createStore();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default App;
