import React, { FC } from 'react';
import { Redirect, Route } from 'react-router';
import { Routes as R } from '../../constants'
import isNil from 'lodash.isnil';

type PrivateRouteProps = {
    path: string | string[],
    exact?: boolean,
    component: any;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({...params}) => {
    const userToken = localStorage.getItem('github_token');
    return !isNil(userToken) ? <Route {...params} /> : <Redirect to={R.LOGIN}/>
}
