import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Title } from './styles';

export default class extends Component
{
	static navigationOptions = ({ navigation }) => ({
		title: 'Главная',
		tabBarIcon: ({ focused, tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} size={26} color={tintColor} />,
	});

	render()
	{
		return (
			<Container source={require('~/../assets/background.jpg')} style={{ flex: 1 }}>
				<Title>Добро пожаловать</Title>
			</Container>
		);
	}
}