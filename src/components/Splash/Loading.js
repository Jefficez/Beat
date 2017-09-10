import React, { Component } from 'react';
import { View } from 'react-native';
import Animation from 'lottie-react-native';
import styles from './styles';

class Loading extends Component {

    componentDidMount() {
        this.animation.play();
    }


    render() {
        return (
            <View
                style={styles.Loading.container}
            >
                <Animation
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={styles.Loading.animation}
                    loop
                    source='loading.json'
                />
            </View>
        );
    }
}

export default Loading;
