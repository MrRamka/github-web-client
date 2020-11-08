import styled, { keyframes } from 'styled-components';
import { Colors } from '../../shared';
import { GithubOutlined } from '@ant-design/icons/lib';

const pulse = keyframes`
	0% {
		transform: scale(0.95);
	}

	40% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.95);
	}
`;

export const PageWrapper = styled.div`
	background-color: ${Colors.gray_3};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GithubOAuthLoginLogo = styled(GithubOutlined)`
	font-size: 30rem;
	color: ${Colors.blue_6};
	animation: ${pulse} 2s ease infinite;
`;

export const GithubLogoutLogo = styled(GithubOutlined)`
	font-size: 30rem;
	color: ${Colors.red_5};
	animation: ${pulse} 2s ease infinite;
`;
