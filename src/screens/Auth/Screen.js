import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Ionicons } from '@expo/vector-icons';
import Input from '~/components/Input';
import { Container, Button, Error } from './styles';
import theme from '~/theme';

@connect((state) => ({
	auth: state.auth
}), actions)
export default class extends Component
{
	state = {
		login: '',
		password: ''
	};

	_login = () => {
		this.props.login(this.state);
	};

	componentWillReceiveProps(nextProps)
	{
		const { auth, navigation } = nextProps;

		if (auth.get('pending') === 'success') navigation.navigate('Profile');
	}

	render()
	{
		const { auth } = this.props;

		return (
			<Container source={require('~/../assets/background.jpg')} style={{ flex: 1 }}>
				{ auth.get('error') ? <Error>{ auth.get('error') }</Error> : null }
				<Input label="Логин" value={this.state.login} autoFocus onChangeText={(login) => this.setState({ login })} />
				<Input label="Пароль" value={this.state.password} secureTextEntry onChangeText={(password) => this.setState({ password })} />
				<Button title="Войти" color={theme.colors.primary} onPress={this._login} />
			</Container>
		);
	}
}