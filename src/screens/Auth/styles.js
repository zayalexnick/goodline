import styled from 'styled-components';

export const Container = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	
	padding: 20px;
`;

export const Group = styled.View`
	margin-bottom: 10px;
	border-bottom-width: 1px;
	border-bottom-color: 1px solid ${ ({ theme }) => theme.colors.primary };
`;

export const Label = styled.Text`
	color: ${ ({ theme }) => theme.colors.white };
`;

export const Input = styled.TextInput`

`;