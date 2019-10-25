import React, { Component } from 'react'
import {
      SafeAreaView,
      StyleSheet,
      ScrollView,
      FlatList,
      View,
    //   Text,
      StatusBar,
    } from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { connect } from 'react-redux';
import {
    fetchUsers
} from '../actions/userAction'
// Components
import User from './User'
import Header from './Header'

export class Root extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <>
                <View style={styles.statusContainer}>
                    <StatusBar barStyle="dark-content" backgroundColor="gray"/>
                </View>
                <SafeAreaView>
                    <Header />
                    {/* <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}> */}
                        <FlatList
                        data={this.props.users}
                        renderItem={({item}) => <User key={item.id} user={item} ></User>}
                        keyExtractor = { (item) => item.id.toString() } />
                    {/* </ScrollView> */}
                </SafeAreaView>
            </>
        )
    }
}




const styles = StyleSheet.create({
    statusContainer: {
        backgroundColor: "gray",
        // flex: 1,
        position: 'relative',
        top: -10,
        maxHeight: 100
    },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        users: state.userReducer.users,
    };
};

// Exports
export default connect(mapStateToProps, {
    fetchUsers
})(Root);
