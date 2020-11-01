import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AUTH_API_URI } from '../../constants';
import { Routes as R } from '../../constants';

export const LoginOAuth: FC = () => {

	const history = useHistory();

	useEffect(() => {
		const code = window.location.href.match(/\?code=(.*)/);
		if (code) {
			const newCode = code.pop();
			fetch(`${AUTH_API_URI}${newCode}`)
				.then(response => response.json())
				.then(({token}) => {
					localStorage.setItem('github_token', token);
					history.push(R.ROOT);
				});
		}
	}, [history])

	return (
		<></>
	)
};
