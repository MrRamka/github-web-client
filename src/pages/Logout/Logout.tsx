import React, { FC, useEffect } from 'react';
import { GithubLogoutLogo, PageWrapper } from '../LoginOAuth/styles';
import { useHistory } from 'react-router';
import { Routes as R } from '../../constants';

/**
 * Logout component
 */
export const Logout: FC = () => {
    const history = useHistory();

    /**
     * Remove token from localStorage
     */
    useEffect(() => {
        localStorage.removeItem('github_token');
        setTimeout(() => {
            history.push(R.LOGIN);
        }, 2000)
    }, [history]);

    return (
        <PageWrapper>
            <GithubLogoutLogo/>
        </PageWrapper>
    );
}
