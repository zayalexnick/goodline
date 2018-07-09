import React from 'react';
import { Item, Title, Image } from './styles';
import Touchable from '~/components/Touchable';

export default ({ title, urlToImage, description, navigation }) => (
	<Touchable onPress={() => navigation.navigate('Item', { title, urlToImage, description })}>
		<Item>
			<Image source={{ uri: urlToImage }} resizeMode="cover" />
			<Title>{ title }</Title>
		</Item>
	</Touchable>
);