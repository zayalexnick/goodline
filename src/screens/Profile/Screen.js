import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default class extends Component
{
	static navigationOptions = ({ navigation }) => ({
		title: 'Профиль',
		tabBarIcon: ({ focused, tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} size={26} color={tintColor} />,
	});

	render()
	{

		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Profile Screen</Text>
			</View>
		);
	}
}