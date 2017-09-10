import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { List, ListItem } from 'native-base';
import { LoginManager } from 'react-native-fbsdk';
import { NavigationActions } from 'react-navigation';

//asyncStore
import asyncStore from '../../asyncStore';

const { width } = Dimensions.get('window');

const drawerImg = require('../../../resource/drawerImg.png');

class Drawer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            infoUser: null
        };
    }

    async componentDidMount() {
        const infoUser = await asyncStore.getToken();
        this.setState({ infoUser });
    }

    async onLogOut() {
        await asyncStore.removeToken();
        LoginManager.logOut();
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Screen_Splash' })
            ]
        });
        this.props.screenProps.rootNavigation.dispatch(resetAction);
    }


    render() {
        const infoUser = {};
        if (this.state.infoUser && this.state.infoUser.id) {
            infoUser.id = this.state.infoUser.id;
            infoUser.name = this.state.infoUser.name;
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2 }}>
                    <Image
                        source={drawerImg}
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        resizeMode='stretch'
                    >
                        <Image
                            source={{ uri: `https://graph.facebook.com/${infoUser.id}/picture?type=large` }}
                            style={{
                                width: (width / 4),
                                height: (width / 4),
                                borderRadius: (width / 2)
                            }}
                        />
                        <Text
                            style={{
                                marginTop: 20,
                                fontSize: 15,
                                fontFamily: 'Times New Roman',
                                color: '#ffffff'
                            }}
                        >{infoUser.name}</Text>
                    </Image>
                </View>
                <View style={{ flex: 5 }}>
                    <ScrollView>
                        <List>
                            <ListItem style={styles.listItem}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('DrawerClose');
                                        this.props.navigation.navigate('Screen_Detail');
                                    }}
                                >
                                    <Text>Simon Mignolet</Text>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <TouchableOpacity>
                                    <Text>Nathaniel Clyne</Text>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <TouchableOpacity>
                                    <Text>Dejan Lovren</Text>
                                </TouchableOpacity>
                            </ListItem>
                        </List>
                    </ScrollView>
                    <TouchableOpacity
                        style={styles.containerBtnLogout}
                        onPress={this.onLogOut.bind(this)}
                    >
                        <Text>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: (width / 2.5),
        height: (width / 2.5),
        borderRadius: (width / 2.5)
    },
    userName: {
        marginTop: 20,
        fontSize: 15,
        fontFamily: 'Times New Roman',
        color: '#000'
    },
    menuContainer: {
        flex: 3,
    },
    listItem: {
        justifyContent: 'center'
    },
    containerBtnLogout: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 15,
    },
    btnLogout: {
        justifyContent: 'center',
    }
});

export default Drawer;
