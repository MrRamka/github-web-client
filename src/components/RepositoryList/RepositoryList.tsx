import React, { FC } from 'react';
import { RepositoryNode } from '../../api/search';
import { List } from 'antd';
import { renderPinnedRepositoryCard, renderRepositoryCard } from '../RepositoryCard/renders';

export type RepositoryListProps = {
    data: RepositoryNode[];
    loading: boolean;
    pageSize?: number;
    pinnedCard?: boolean;
}

/**
 * List of Repositories
 * @see List
 */
export const RepositoryList: FC<RepositoryListProps> = ({data, loading, pageSize = 4, pinnedCard= false}) => {

    return (
        <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={pinnedCard ? renderPinnedRepositoryCard : renderRepositoryCard}
            pagination={pinnedCard ? false :{pageSize}}
        />
    );
}
