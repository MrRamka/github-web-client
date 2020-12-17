import React, { FC, useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { useQuery } from '@apollo/client';
import { AvatarCell, StyledDiv } from '../UserInfo/styles';
import { PoppinsText } from '../../shared/PoppinsText';
import { GET_USER_QUERY, UserProfileNode } from '../../api/user';
import { useParams } from 'react-router';

/**
 * User info in repositories list
 */
export const UserInfoBlock: FC = () => {
    const {username: login } = useParams();

    const searchVariables = {
        count: 10,
        login: login,
    };
    const {loading, data} = useQuery<UserProfileNode>(GET_USER_QUERY, {
        variables: {...searchVariables}
    });
    const [avatarUrl, setAvatarUrl] = useState<string>('');
    const [name, setName] = useState<string>('Github User');

    useEffect(() => {
        if (!loading) {
            setAvatarUrl(data?.user.avatarUrl ?? '');
            setName(data?.user.name ?? 'Github User');
        }
    }, [loading, data])

    return (
        <StyledDiv>
            <AvatarCell>
                <Avatar src={avatarUrl} shape="circle" size={46}/>
            </AvatarCell>
            <AvatarCell>
                <PoppinsText>{name}</PoppinsText>
                <br/>
                <PoppinsText type="secondary">{login}</PoppinsText>
            </AvatarCell>
        </StyledDiv>
    )

}
