import styled from 'styled-components';

export const Container = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	align-items: center;
	
	padding: 20px;
`;

export const Title = styled.Text`
	padding: 10px 30px;

	font-family: 'OpenSansMedium';
	font-size: 20px;
	color: ${ ({ theme }) => theme.colors.white };
	
	background: ${ ({ theme }) => theme.colors.primary };
`;