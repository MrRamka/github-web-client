import React, { FC } from 'react';
import { RepositoryNode } from '../../api/search';
import { List } from 'antd';
import { renderRepositoryCard } from '../RepositoryCard/renders';

export type RepositoryListProps = {
    data: RepositoryNode[];
    loading: boolean;
    pageSize?: number;
}

export const RepositoryList: FC<RepositoryListProps> = ({data, loading, pageSize = 4}) => {

    return (
        <List
            style={{width: '50%'}}
            loading={loading}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={renderRepositoryCard}
            pagination={{pageSize}}
        />
    );
}
