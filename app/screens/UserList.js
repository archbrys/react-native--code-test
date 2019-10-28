// Imports: Dependencies
import React from 'react'
import {
    FlatList,
    ActivityIndicator,
    Text,
    View
} from 'react-native';
import { ListItem, Header } from 'react-native-elements'

export default function UserList(props) {

    renderItem = ({ item }) => (
        <ListItem
          title={item.first_name + " " + item.last_name}
          leftAvatar={{ source: { uri: item.avatar } }}
          bottomDivider
          containerStyle={{height: 100}}
        />
    )

    renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!props.isLoadingMore) return null;
        if (props.noMoreToLoad) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', paddingTop: 10}}>
                    <Text>No more records to load.</Text>
                </View>

            )
        }
        return (
           <ActivityIndicator
             style={{ color: '#000', paddingTop: 10 }}
           />
        );
    };

    keyExtractor = (item, index) => index.toString()

    return (
        <>
            <Header
                containerStyle={{backgroundColor: "#F1F1F1"}}
                centerComponent={{
                    text: "Users",
                    style: { color: 'black', fontSize: 20 }
                }}
            />
            <FlatList
                data={props.users}
                renderItem={this.renderItem}
                keyExtractor = {this.keyExtractor}
                onEndReachedThreshold={0.4}
                onEndReached={props.handleLoadMore}
                ListFooterComponent={this.renderFooter}
            />
        </>
    )
}
