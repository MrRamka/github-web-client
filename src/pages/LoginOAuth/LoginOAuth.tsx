import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AUTH_API_URI, Routes as R } from '../../constants';
import { GithubOAuthLoginLogo, PageWrapper } from './styles';

/**
 * Long OAuth component.
 */
export const LoginOAuth: FC = () => {

    const history = useHistory();

    /**
     * Receive github code and get token from heroku server.
     * And redirect to home page.
     * @module LoginOAuth
     */
    useEffect(() => {
        const code = window.location.href.match(/\?code=(.*)/);
        if (code) {
            const newCode = code.pop();
            fetch(`${AUTH_API_URI}${newCode}`)
                .then(response => response.json())
                .then(({token}) => {
                    localStorage.setItem('github_token', token);
                    setTimeout(() => {
                        history.push(R.ROOT);
                    }, 1000)
                });
        }
    }, [history])

    return (
        <PageWrapper>
            <GithubOAuthLoginLogo/>
        </PageWrapper>
    )
};
