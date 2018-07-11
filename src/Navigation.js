import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import theme from '~/theme';

import HomeScreen from '~/screens/Home';

import NewsScreen from '~/screens/News';
import NewsItemScreen from '~/screens/Item';

import ProfileScreen from '~/screens/Profile';
import AuthScreen from '~/screens/Auth';
import AuthCheckScreen from '~/screens/AuthCheck';

export default createBottomTabNavigator(
	{
		Home: HomeScreen,
		News: {
			screen: createStackNavigator({
				List: NewsScreen,
				Item: NewsItemScreen
			}, {
				initialRouteName: 'List',
			}),
			navigationOptions: ({ navigation }) => ({
				headerStyle: {
					backgroundColor: theme.colors.primary
				},
				tabBarIcon: ({ focused, tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'} size={26} color={tintColor} />
			}),
		},
		Private: {
			screen: createSwitchNavigator({
				Auth: AuthScreen,
				Profile: ProfileScreen,
				AuthCheck: AuthCheckScreen,
			}, {
				initialRouteName: 'AuthCheck'
			}),
			navigationOptions: ({ navigation }) => ({
				title: 'Профиль',
				tabBarIcon: ({ focused, tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} size={26} color={tintColor} />,
			})
		},
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