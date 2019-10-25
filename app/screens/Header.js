import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function Header() {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Users</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },
    title : {
        fontSize: 30
    }
});
