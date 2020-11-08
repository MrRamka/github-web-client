import React, { FC } from 'react';
import { Layout } from 'antd';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Content, PageWrapper } from '../../shared';
import { LayoutWrapper } from "../../shared";

export const Profile: FC = () => {
	return (
		<PageWrapper>
			<LayoutWrapper>
				<NavigationMenu/>
				<Layout>
					<Content>
						Profile
					</Content>
				</Layout>
			</LayoutWrapper>
		</PageWrapper>
	);
}
