import React, { Component } from 'react';
import { Container, Description } from './styles';
import theme from '~/theme';

export default class extends Component
{

	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('title'),
		headerTintColor: theme.colors.white,
		headerStyle: {
			backgroundColor: theme.colors.primary,
		},
	});

	render()
	{
		const { navigation } = this.props;

		return (
			<Container source={{ uri: navigation.getParam('urlToImage') }} style={{ flex: 1 }}>
				<Description>{ navigation.getParam('description') }</Description>
			</Container>
		);
	}
}