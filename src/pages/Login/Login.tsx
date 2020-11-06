import React, { FC } from 'react';
import { CLIENT_ID, REDIRECT_URI } from '../../constants/oath';
import {
	BlueButtonOutline,
	ButtonWrapper,
	GithubLoginLogo,
	GithubViewLogo,
	InnerDiv,
	LogoWrapper,
	PageWrapper,
	TextWrapper,
	ViewCode,
	ViewCodeBlock,
	ViewCodeLink,
	WelcomeText,
	Wrapper
} from './styles';
import { Routes as R } from '../../constants';

export const Login: FC = () => {

	const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`;

	return (
		<PageWrapper>
			<Wrapper>
				<LogoWrapper>
					<GithubLoginLogo/>
				</LogoWrapper>
				<TextWrapper>
					<InnerDiv>
						<div>
							<WelcomeText>
								It is a long established fact that a reader will be distracted by the readable content
								of a
								<br/>
								<br/>
								page when looking at its layout. The point of using Lorem Ipsum is that it has a
								more-or-less normal distribution of letters, as opposed to using 'Content here, content
								here', making it look like readable English.
							</WelcomeText>
						</div>
						<ButtonWrapper>
							<BlueButtonOutline>
								<a href={url}>Login with GitHub</a>
							</BlueButtonOutline>
						</ButtonWrapper>
					</InnerDiv>
				</TextWrapper>
			</Wrapper>
			<ViewCodeBlock>
				<ViewCode>
					<GithubViewLogo/>
					&nbsp;&nbsp;
					<ViewCodeLink href={R.REPO} target="_blank">View code</ViewCodeLink>
				</ViewCode>
			</ViewCodeBlock>

		</PageWrapper>
	);
}