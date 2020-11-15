import React, { FC } from 'react';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';
import { UserRepositoriesList } from '../../components/UserRepositoriesList';

export const Repositories: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        <UserRepositoriesList/>
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
