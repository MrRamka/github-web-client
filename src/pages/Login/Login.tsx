import React, { FC } from 'react';
import { CLIENT_ID, REDIRECT_URI, Links as L } from '../../constants';
import {
    BlueLinkOutline,
    ButtonWrapper,
    GithubLoginLogo,
    GithubViewLogo,
    InnerDiv,
    LogoWrapper,
    TextWrapper,
    ViewCode,
    ViewCodeBlock,
    ViewCodeLink,
    WelcomeText,
    Wrapper
} from './styles';
import { PageWrapper } from '../../shared';
import Title from 'antd/lib/typography/Title';

/**
 * Component for Login Page
 */
export const Login: FC = () => {

    /**
     * OAuth url for authorization
     * And redirect to LoginOAuth
     */
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,gist,public_repo&redirect_uri=${REDIRECT_URI}`;

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
                                <Title>Github Web Client</Title>
                                Simple. Beautiful. Practish. Good.
                                a
                                <br/>
                                A minimal React application using Apollo Client with GitHub's GraphQL API.
                                <br/>
                                Easy-to-use client for viewing git repositories. Perfect UI/UX for the best experience. Enjoy our product!
                            </WelcomeText>
                        </div>
                        <ButtonWrapper>
                            <BlueLinkOutline href={url}>
                                Login with GitHub
                            </BlueLinkOutline>
                        </ButtonWrapper>
                    </InnerDiv>
                </TextWrapper>
            </Wrapper>
            <ViewCodeBlock>
                <ViewCode>
                    <GithubViewLogo/>
                    &nbsp;&nbsp;
                    <ViewCodeLink href={L.REPO} target="_blank">View code</ViewCodeLink>
                </ViewCode>
            </ViewCodeBlock>

        </PageWrapper>
    );
}
