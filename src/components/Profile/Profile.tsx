import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY, ProfileNode } from '../../api/profile';
import { RepositoryNode } from '../../api/search';
import { ProfileWrapper } from './styles';
import { ProfileInfo } from '../ProfileInfo';
import { PinnedItems } from '../PinnedItems';
import { Col, Row } from 'antd';

type Props = {}

const emptyProfileInfo: ProfileNode = {
    viewer: {
        avatarUrl: '',
        followers: {totalCount: 0},
        following: {totalCount: 0},
        login: '',
        name: '',
        pinnedItems: {nodes: []},
        url: ''
    }
}

export const Profile: FC<Props> = () => {

    const pinnedItemAmount = 4;

    const [profileInfo, setProfileInfo] = useState<ProfileNode>(emptyProfileInfo);
    const [pinnedItems, setPinnedItems] = useState<RepositoryNode[]>([]);

    const {loading, data} = useQuery<ProfileNode>(GET_PROFILE_QUERY, {
        variables: {
            count: pinnedItemAmount
        }
    });

    useEffect(() => {
        if (!loading) {
            console.log(data);
            setProfileInfo(data ?? emptyProfileInfo);
            setPinnedItems(data?.viewer?.pinnedItems?.nodes ?? [])
        }
    }, [loading, data])

    return (
        <ProfileWrapper>
            <Row justify="start">
                <Col span={16}>
                    <Row>
                        <ProfileInfo data={profileInfo}/>
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
