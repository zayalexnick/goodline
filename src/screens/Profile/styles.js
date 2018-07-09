import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons'

export const Icon = styled(Ionicons)`
	color: ${ ({ theme, focused }) => focused ? theme.colors.primary : theme.colors.black };
`;

export const Title = styled.Text`
	font-size: 12px;
	color: ${ ({ theme, focused }) => focused ? theme.colors.primary : theme.colors.black };
	
	text-align: center;
`;