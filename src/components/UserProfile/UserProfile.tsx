import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RepositoryNode } from '../../api/search';
import { useQuery } from '@apollo/client';
import { GET_USER_QUERY, UserProfileNode } from '../../api/user';
import { emptyUserProfileInfo } from '../Profile/types';
import { BaseUserProfile } from './BaseUserProfile';
import { NotFoundPage } from '../../pages/NotFound';
import { ApolloError } from '@apollo/client/errors';
import { Spin } from 'antd';

/**
 * User ProfilePage by uri param
 * @see BaseUserProfile
 */
export const UserProfile: FC = () => {

    const {username: login} = useParams();

    const pinnedItemAmount = 4;

    const [profileInfo, setProfileInfo] = useState<UserProfileNode>(emptyUserProfileInfo);
    const [pinnedItems, setPinnedItems] = useState<RepositoryNode[]>([]);
    const [errors, setErrors] = useState<ApolloError>();

    const {loading, data, error} = useQuery<UserProfileNode>(GET_USER_QUERY, {
        variables: {
            count: pinnedItemAmount,
            login: login
        }
    });

    useEffect(() => {
        if (!loading) {
            if (error) {
                setErrors(error);
                return;
            }
            setProfileInfo(data ?? emptyUserProfileInfo);
            setPinnedItems(data?.user?.pinnedItems?.nodes ?? [])
        }
    }, [loading, data, error])

    return (
        <Spin spinning={loading}>
            {!errors ?
                (<BaseUserProfile user={profileInfo.user} loading={loading} pinnedItems={pinnedItems}/>) :
                (<NotFoundPage subTitle={errors?.message}/>)
            }
        </Spin>
    );
}
