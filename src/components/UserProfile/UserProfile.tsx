import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RepositoryNode } from '../../api/search';
import { useQuery } from '@apollo/client';
import { GET_USER_QUERY, UserProfileNode } from '../../api/user';
import { emptyUserProfileInfo } from '../Profile/types';
import { ProfileWrapper } from '../Profile/styles';
import { Col, Row } from 'antd';
import { ProfileInfo } from '../ProfileInfo';
import { PinnedItems } from '../PinnedItems';

export const UserProfile: FC = () => {

    const {username: login } = useParams();

    const pinnedItemAmount = 4;

    const [profileInfo, setProfileInfo] = useState<UserProfileNode>(emptyUserProfileInfo);
    const [pinnedItems, setPinnedItems] = useState<RepositoryNode[]>([]);

    const {loading, data} = useQuery<UserProfileNode>(GET_USER_QUERY, {
        variables: {
            count: pinnedItemAmount,
            login: login
        }
    });

    useEffect(() => {
        if (!loading) {
            setProfileInfo(data ?? emptyUserProfileInfo);
            setPinnedItems(data?.user?.pinnedItems?.nodes ?? [])
        }
    }, [loading, data])

    return (
        <ProfileWrapper>
            <Row justify="start">
                <Col span={16}>
                    <Row>
                        <ProfileInfo data={profileInfo.user}/>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row>
                        <PinnedItems pinnedItems={pinnedItems} loading={loading}/>
                    </Row>
                </Col>
            </Row>
        </ProfileWrapper>
    );
}
