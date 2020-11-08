import styled from 'styled-components';
import { Colors } from '../../shared';
import { GithubOutlined } from '@ant-design/icons/lib';
import { PoppinsText } from '../../shared/PoppinsText';

export const Wrapper = styled.div`
	height: 90vh;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

export const GithubLoginLogo = styled(GithubOutlined)`
	font-size: 25rem;
	color: ${Colors.blue_6}
`;

export const LogoWrapper = styled.div`
	width: 40%;
	height: 25rem;
	display: flex;
	justify-content: flex-end;
`;

export const TextWrapper = styled.div`
	width: 50%;
	height: 25rem;
`;
export const BlueLinkOutline = styled.a`
	border: 2px solid;
	color: ${Colors.blue_6};
	background-color: ${Colors.gray_3};
	border-color: ${Colors.blue_6};
	border-radius: 10px;
	font-size: 1.7rem;
	font-family: 'Poppins', serif;
	padding: 0.7rem 3rem;
`;

export const WelcomeText = styled(PoppinsText)`
	font-family: 'Poppins', serif;
	color: ${Colors.blue_12};
	font-size: 1.5rem;
	font-weight: bold;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const InnerDiv = styled.div`
	height: 25rem;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ViewCodeBlock = styled.div`
	display: flex;
	justify-content: center;
`;

export const GithubViewLogo = styled(GithubOutlined)`
	font-size: 4rem;
	color: ${Colors.blue_12}
`;

export const ViewCode = styled.div`
	width: 15%;
	display: flex;
	align-items: center;
`;

export const ViewCodeLink = styled.a`
	color: ${Colors.blue_12};
	font-family: 'Poppins', serif;
	font-size: 1.3rem;
	font-weight: bold;
`;
