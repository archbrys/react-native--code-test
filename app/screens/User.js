import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

export default function User(props) {
    return (
        <View >
            <Image
            style={{width: 50, height: 50, borderRadius: 50}}
            source={{uri: props.user.avatar}}
            />
            <Text style={styles.item}>{props.user.first_name +" "+ props.user.last_name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 100,
    },
})
