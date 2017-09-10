import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Splash from '../scenes/Splash'; // splash
import Home from '../scenes/Home';     // home
import Detail from '../scenes/Detail'; // detail
import Drawer from '../scenes/Drawer'; // drawer

const widthScreen = Dimensions.get('window').width / 10;

const statckNavigation = StackNavigator(
    {
        Screen_Home: {
            screen: Home,
            navigationOptions: () => ({
                header: false
            })
        },
        Screen_Detail: {
            screen: Detail,
            navigationOptions: () => ({
                header: false
            })
        }
    },
    {
        headerMode: 'screen',
        initialRouteName: 'Screen_Home',
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [layout.initWidth, 0, 0]
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                    outputRange: [0, 1, 1, 0.3, 0]
                });
                return { opacity, transform: [{ translateX }] };
            }
        })
    }
);

const DrawerNavigation = DrawerNavigator({
    ScreenNavigation: {
        screen: statckNavigation,
    },
}, {
        drawerWidth: widthScreen * 7,
        drawerPosition: 'left',
        contentComponent: props => <Drawer {...props} />
    }
);

const RootNavigation = StackNavigator({
    Screen_Splash: {
        screen: Splash,
        navigationOptions: () => ({ header: false })
    },
    Screen_DrawerNavigation: {
        screen: ({ navigation }) => <DrawerNavigation
            screenProps={{ rootNavigation: navigation }}
        />,
        navigationOptions: () => ({ header: false })
    }
},
    {
        headerMode: 'screen',
        initialRouteName: 'Screen_Splash',
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [layout.initWidth, 0, 0]
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                    outputRange: [0, 1, 1, 0.3, 0]
                });
                return { opacity, transform: [{ translateX }] };
            }
        })
    }
);

export default RootNavigation;
