import React, { Component } from 'react';
import { View } from 'react-native';
import Animation from 'lottie-react-native';
import styles from './styles';

class LoginSuccess extends Component {

    render() {
        return (
            <View style={styles.LoginSuccess.container}>
                <Animation
                    style={styles.LoginSuccess.animation}
                    source='checked.json'
                    progress={this.props.progress}
                />
            </View>
        );
    }
}

export default LoginSuccess;
