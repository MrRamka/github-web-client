import React, { FC } from 'react';
import { Content, PageWrapper } from '../../shared';
import { LayoutWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';

export const PullRequests: FC = () => {
	return (
		<PageWrapper>
			<LayoutWrapper>
				<NavigationMenu/>
				<Layout>
					<Content>
						Explore
					</Content>
				</Layout>
			</LayoutWrapper>
		</PageWrapper>
	);
}