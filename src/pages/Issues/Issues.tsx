import React, { FC } from 'react';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Layout } from 'antd';

/**
 * Component for users Issues
 */
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
