import React, { FC, useMemo } from 'react';
import { UserNode } from '../../api/search';
import { Avatar, List, Typography } from 'antd';
import { Colors, IconText } from '../../shared';
import { DatabaseOutlined, UserOutlined } from '@ant-design/icons/lib';
import { ListItem, StyledCard } from './styles';
import { makeNullStringToEmptyString } from '../../helpers';

const {Text} = Typography;

export const UserCard: FC<UserNode> = (
    {
        name,
        login,
        avatarUrl,
        bio,
        email,
        followers,
        following,
        repositories
    }) => {

    const actions = useMemo(() => [
        <IconText icon={<UserOutlined style={{color: Colors.blue_6}}/>}
                  text={makeNullStringToEmptyString(followers?.totalCount?.toString())}/>,
        <IconText icon={<UserOutlined/>}
                  text={makeNullStringToEmptyString(following?.totalCount?.toString())}/>,
        <IconText icon={<DatabaseOutlined/>}
                  text={makeNullStringToEmptyString(repositories?.totalCount?.toString())}/>
    ], [following, followers, repositories]);

    return (
        <StyledCard>
            <ListItem
                key={login}
                actions={[...actions]}
            >
                <List.Item.Meta
                    avatar={<Avatar src={avatarUrl}/>}
                    title={<Text>{login}</Text>}
                    description={email ?? ''}
                />
                <br/>
                {name}
                <br/>
                {bio}
            </ListItem>
        </StyledCard>
    );
}
