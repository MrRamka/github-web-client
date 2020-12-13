import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY, ProfileNode } from '../../api/profile';
import { RepositoryNode } from '../../api/search';
import { emptyProfileInfo } from './types';
import { BaseUserProfile } from '../../pages/UserProfile/BaseUserProfile';

type Props = {}

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
            setProfileInfo(data ?? emptyProfileInfo);
            setPinnedItems(data?.viewer?.pinnedItems?.nodes ?? [])
        }
    }, [loading, data])

    return (
        <BaseUserProfile user={profileInfo.viewer} loading={loading} pinnedItems={pinnedItems}/>
    );
}
