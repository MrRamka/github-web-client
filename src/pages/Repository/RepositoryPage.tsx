import React, { FC } from 'react';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';
import { Repository } from '../../components/Repository';


/**
 * Any user repository page
 */
export const RepositoryPage: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        <Repository/>
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
