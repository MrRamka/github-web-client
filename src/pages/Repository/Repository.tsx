import React, { FC } from 'react';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';
import { RepositoryPage } from '../../components/RepositoryPage';


/**
 * Any user repository page
 */
export const Repository: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        <RepositoryPage/>
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
