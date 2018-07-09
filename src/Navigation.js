import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import theme from '~/theme';

import HomeScreen from '~/screens/Home';
import NewsScreen from '~/screens/News';
import ProfileScreen from '~/screens/Profile';
import NewsItemScreen from '~/screens/Item';

export default createBottomTabNavigator(
	{
		Home: HomeScreen,
		News: {
			screen: createStackNavigator({
				List: NewsScreen,
				Item: NewsItemScreen
			}),
			navigationOptions: ({ navigation }) => ({
				headerStyle: {
					backgroundColor: theme.colors.primary
				},
				tabBarIcon: ({ focused, tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'} size={26} color={tintColor} />
			}),
			initialRouteName: 'List',
		},
		Profile: ProfileScreen,
	},
	{
		tabBarOptions: {
			activeTintColor: theme.colors.primary,
			inactiveTintColor: theme.colors.white,
			activeBackgroundColor: theme.colors.white,
			labelStyle: {
				fontSize: 12
			},
			style: {
				backgroundColor: theme.colors.primary
			}
		}
	}
);