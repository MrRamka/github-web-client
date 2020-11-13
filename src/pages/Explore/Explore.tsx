import React, { FC } from 'react';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';
import { ExploreList } from '../../components/ExploreList';


export const Explore: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        <ExploreList />
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
