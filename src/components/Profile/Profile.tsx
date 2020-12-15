import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY, ProfileNode } from '../../api/profile';
import { RepositoryNode } from '../../api/search';
import { emptyProfileInfo } from './types';
import { BaseUserProfile } from '../UserProfile/BaseUserProfile';

type Props = {}

/**
 * User profile component
 */
export const Profile: FC<Props> = () => {

    const pinnedItemAmount = 4;

    /**
     * State
     */
    const [profileInfo, setProfileInfo] = useState<ProfileNode>(emptyProfileInfo);
    const [pinnedItems, setPinnedItems] = useState<RepositoryNode[]>([]);

    /**
     * Get data from server
     */
    const {loading, data} = useQuery<ProfileNode>(GET_PROFILE_QUERY, {
        variables: {
            count: pinnedItemAmount
        }
    });

    /**
     * Update data
     */
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
