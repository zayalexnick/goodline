import React, { Component } from 'react';
import { Platform, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './styles';
import RefreshControl from '~/components/RefreshControl';
import theme from '~/theme'

import NewsItem from './Item';

@connect((state) => ({
	news: state.news
}), actions)
export default class extends Component
{
	static navigationOptions = ({ navigation }) => ({
		title: 'Новости',
		headerTintColor: theme.colors.white,
		headerStyle: {
			backgroundColor: theme.colors.primary,
		},
		tabBarIcon: ({ focused, tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'} size={26} color={tintColor} />
	});

	componentDidMount()
	{
		this._loadNews();
	}

	_loadNews = () => this.props.getList();

	render()
	{
		const { news, navigation } = this.props;

		return (
			<Container>
				<FlatList
					refreshControl={<RefreshControl refreshing={news.getIn(['list', 'pending']) === 'pending'} onRefresh={this._loadNews} /> }
					data={news.getIn(['list', 'entities']).length > 0 ? news.getIn(['list', 'entities']) : [{}]}
					renderItem={ ({ item }) => <NewsItem { ...item } navigation={navigation} /> }
				/>
			</Container>
		);
	}
}