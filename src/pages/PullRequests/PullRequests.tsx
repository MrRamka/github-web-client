import React, { FC } from 'react';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';

/**
* Component for users Pull Requests
*/
export const PullRequests: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        Pull Requests
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
