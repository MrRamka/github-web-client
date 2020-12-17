import React, { FC } from 'react';
import { Layout } from 'antd';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { RepositoriesList } from '../../components/RepositoriesList';

/**
 * Any user repositories page
 */
export const UserRepositoriesPage: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        <RepositoriesList />
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
