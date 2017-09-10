import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';

//scenes
import AppNavigation from './navigation/AppNavigation';
// store
import store from './redux/store';

class App extends Component {

    componentDidMount() {
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        });
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}

export default App;
