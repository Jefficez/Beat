import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

    componentWillMount() {
        
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Home Component</Text>
            </View>
        );
    }
}

export default Home;
