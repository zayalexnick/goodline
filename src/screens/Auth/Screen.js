import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, Group, Label, Input } from './styles';

export default class extends Component
{
	render()
	{
		return (
			<Container source={require('~/../assets/background.jpg')} style={{ flex: 1 }}>
				<Group>
					<Label>Логин</Label>
					<Input underlineColorAndroid='transparent' onChange={(e) => this.setState({ login: e.target.value })} />
				</Group>
				<Group>
					<Label>Пароль</Label>
					<Input underlineColorAndroid='transparent' onChange={(e) => this.setState({ password: e.target.value })} />
				</Group>
			</Container>
		);
	}
}