// Imports: Dependencies
import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';

// Imports: Actions
import {
    fetchUsers
} from '../actions/userAction'

// Imports: Components
import Loading from './Loading'
import UserList from './UserList'

export class Root extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            isLoadingMore : false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchUsers(this.props.page, (res) => {
                this.setState({
                    isLoading : false
                })

                if (!res) console.log("handle error");
            });
        }, 5000)
    }

    handleLoadMore = () => {
        if (!this.state.isLoadingMore) {
            this.setState({
                isLoadingMore : true
            })
            const page = this.props.page + 1; // increase page by 1
            setTimeout(() => {
                this.props.fetchUsers(page, (res) => {
                    this.setState({
                        isLoadingMore : false
                    })

                    if (!res) console.log("handle error");
                });
            }, 5000)
        }
    }

    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    {this.state.isLoading ?
                        <View style={styles.loadingContainer}>
                            <Loading />
                        </View>
                            :
                        <UserList
                            users={this.props.users}
                            handleLoadMore={this.handleLoadMore.bind(this)}
                            isLoadingMore={this.state.isLoadingMore}
                            noMoreToLoad={this.props.noMoreToLoad}/>
                    }
                </SafeAreaView>
            </>
        )
    }
}



// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        users: state.userReducer.users,
        page: state.userReducer.page,
        noMoreToLoad : state.userReducer.noMoreToLoad
    };
};

// Exports
export default connect(mapStateToProps, {
    fetchUsers
})(Root);




const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    }
});
