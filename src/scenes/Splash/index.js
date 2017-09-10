import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

//component
import Login from '../../components/Splash/Login';
import LoginSuccess from '../../components/Splash/LoginSuccess';
import Loading from '../../components/Splash/Loading';

//action
import { actionLoginFB } from './action';

//asyncStore
import asyncStore from '../../asyncStore';


class Splash extends Component {

	constructor(props) {
		super(props);
		this.state = {
			progressLogin: new Animated.Value(0),
			progressLoginSuccess: new Animated.Value(0),
			showLoading: true,
			showLogin: false
		};
	}

	async componentDidMount() {
		const token = await asyncStore.getToken('token');
		if (token && token.id && token.id.length > 1) {
			setTimeout(() => {
				this.setState({ showLoading: false, showLogin: false }, () => {
					Animated.timing(this.state.progressLoginSuccess, {
						toValue: 1,
						duration: 2000,
					}).start();
				});
				setTimeout(() => {
					const resetRouter = NavigationActions.reset({
						index: 0,
						actions: [
							NavigationActions.navigate({ routeName: 'Screen_DrawerNavigation' })
						]
					});
					this.props.navigation.dispatch(resetRouter);
				}, 3000);
			}, 5000);
		} else {
			setTimeout(() => {
				this.setState({ showLoading: false, showLogin: true }, () => {
					Animated.timing(this.state.progressLogin, {
						toValue: 0.7,
						duration: 5000,
					}).start();
				});
			}, 5000);
		}	
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.rdLogin && nextProps.rdLogin.id.length > 1) {
			this.setState({ showLogin: false }, () => {
				Animated.timing(this.state.progressLoginSuccess, {
					toValue: 1,
					duration: 2000,
				}).start();
			});
			setTimeout(() => {
				const resetRouter = NavigationActions.reset({
					index: 0,
					actions: [
						NavigationActions.navigate({ routeName: 'Screen_DrawerNavigation' })
					]
				});
				this.props.navigation.dispatch(resetRouter);
			}, 3000);
		}
	}

	checkLogin() {
		actionLoginFB(this.props);
	}


	render() {
		const { showLogin, showLoading } = this.state;
		return (
			<View style={{ flex: 1 }}>
				{showLoading && <Loading />}
				{showLogin && <Login
					progress={this.state.progressLogin}
					checkLogin={this.checkLogin.bind(this)}
				/>}
				{!showLogin &&
					<LoginSuccess
						progress={this.state.progressLoginSuccess}
					/>}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	rdLogin: state.rdLogin
});

export default connect(mapStateToProps)(Splash);
