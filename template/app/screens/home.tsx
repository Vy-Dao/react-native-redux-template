import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});


export default function HomeScreen(navigation) : JSX.Element {
    
    return(
        <View style={styles.container}>
        <Text>Welcome to the Profile Screen!</Text>
        <Button title="Go to Home Screen" onPress={() => navigation.navigate("Home")} />
        
    </View>
    )
}