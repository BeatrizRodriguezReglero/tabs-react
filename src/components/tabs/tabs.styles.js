import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledTab = styled.span`
	border: 1px solid black;
	padding: 20px;
	color: ${({ $active }) => ($active ? 'white' : 'black')};
	background-color: ${({ $active }) => ($active ? 'steelblue' : 'transparent')};
`;

const StyledInfo = styled.p`
	width: 230px;
	padding: 10px;
	color: red;
	border: 1px solid black;
`;
export { StyledContainer, StyledTab, StyledInfo };
