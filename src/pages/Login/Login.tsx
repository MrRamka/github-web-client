import React, { FC } from 'react';
import { CLIENT_ID, REDIRECT_URI } from '../../constants/oath';

export const Login: FC = () => {
	return (
		<>
			<h1>Hello man</h1>
			<a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}>
				Login
			</a>
		</>);
}
