import React, { FC } from 'react';
import { UserNode } from '../../api/search';
import { List } from 'antd';
import { renderUserCard } from '../UserCard/renders';

export type UserListProps = {
    data: UserNode[];
    loading: boolean;
    pageSize?: number;
}

/**
 * List of Users
 * @see List
 */
export const UserList: FC<UserListProps> = ({data, loading, pageSize = 8}) => {

    return (
        <List
            style={{width: '50%'}}
            loading={loading}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={renderUserCard}
            pagination={{pageSize}}
        />
    );
}
