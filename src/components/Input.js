import React, { Component } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';

const Group = styled.View`
	position: relative;
	
	height: 50px;
	
	margin-bottom: 10px;
	border-bottom-color: ${ ({ theme }) => theme.colors.primary };
`;

const Label = styled(Animated.Text)`
	color: ${ ({ focused, theme }) => focused ? theme.colors.primary : theme.colors.white };
`;

const Input = styled.TextInput`
	font-size: 18px;
	color: ${ ({ theme }) => theme.colors.white };
	
	border-bottom-width: 1px;
	border-color: ${ ({ focused, theme }) => focused ? theme.colors.primary : 'transparent' };
`;

export default class extends Component
{
	state = {
		labelPosition: new Animated.Value(22),
		labelFontSize: new Animated.Value(18)
	};

	_focusHandler = () => {
		this.setState({ focused: true });
		Animated.timing(this.state.labelPosition, { toValue: 0, duration: 300 }).start();
		Animated.timing(this.state.labelFontSize, { toValue: 13, duration: 300 }).start();
	};

	_blurHandler = () => {
		this.setState({ focused: false });

		if (this.props.value === '') {
			Animated.timing(this.state.labelPosition, { toValue: 22, duration: 300 }).start();
			Animated.timing(this.state.labelFontSize, { toValue: 18, duration: 300 }).start();
		}
	};

	render()
	{
		const { label } = this.props;
		const { focused } = this.state;

		return (
			<Group>
				<Label style={{ top: this.state.labelPosition, fontSize: this.state.labelFontSize }} focused={focused}>{ label }</Label>
				<Input underlineColorAndroid="transparent" { ...this.props } onFocus={this._focusHandler} onBlur={this._blurHandler} focused={focused} />
			</Group>
		);
	}
}