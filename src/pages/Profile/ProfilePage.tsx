import React, { FC } from 'react';
import { Layout } from 'antd';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { Profile } from '../../components/Profile';


/**
 * Own profile component
 */
export const ProfilePage: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        <Profile />
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
