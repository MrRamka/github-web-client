import React, { FC } from 'react';
import { Layout } from 'antd';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Content } from '../../shared';

export const Profile: FC = () => {

	return (
		<Layout style={{minHeight: '100vh'}}>
			<NavigationMenu />
			<Layout>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
				>
					Profile
				</Content>
			</Layout>
		</Layout>)

}
