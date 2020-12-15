import React, { FC } from 'react';
import { RepositoryNode } from '../../api/search';
import { PinnedItemsWrapper } from './styles';
import { RepositoryList } from '../RepositoryList';

type PinnedItemsProps = {
    pinnedItems: RepositoryNode[];
    loading: boolean;
}

/**
 * Pinned Repositories in UserProfile/Profile pages
 */
export const PinnedItems: FC<PinnedItemsProps> = ({pinnedItems, loading}) => {

    return (
        <PinnedItemsWrapper>
            <h3>Pinned Repositories</h3>
            <RepositoryList data={pinnedItems} loading={loading} pinnedCard={true}/>
        </PinnedItemsWrapper>
    );
}
