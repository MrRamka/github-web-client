import React, { FC } from 'react';
import { Layout } from 'antd';
import { NavigationMenu } from '../../components/NavigationMenu';
import { Content, LayoutWrapper, PageWrapper } from '../../shared';
import { UserProfile } from '../../components/UserProfile';

export const UserProfilePage: FC = () => {
    return (
        <PageWrapper>
            <LayoutWrapper>
                <NavigationMenu/>
                <Layout>
                    <Content>
                        <UserProfile />
                    </Content>
                </Layout>
            </LayoutWrapper>
        </PageWrapper>
    );
}
