import React, { FC } from 'react';
import { Content, PageWrapper } from '../../shared';
import { LayoutWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';

export const Issues: FC = () => {
	return (
		<PageWrapper>
			<LayoutWrapper>
				<NavigationMenu/>
				<Layout>
					<Content>
						Issues
					</Content>
				</Layout>
			</LayoutWrapper>
		</PageWrapper>
	);
}
