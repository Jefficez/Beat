import React, { Component } from 'react';
import {
	View,
	TouchableHighlight
} from 'react-native';
import Animation from 'lottie-react-native';
import { Icon } from 'native-base';
import styles from './styles';


class Login extends Component {

	render() {
		return (
			<View style={styles.Login.container}>
				<Animation
					style={styles.Login.animation}
					source='Login.json'
					progress={this.props.progress}
				/>
				<TouchableHighlight
					onPress={() => this.props.checkLogin()}
					style={styles.Login.btnLogin}
				>
					<Icon name='logo-facebook' style={styles.Login.iconLogin} />
				</TouchableHighlight>
			</View>
		);
	}
}

export default Login;
