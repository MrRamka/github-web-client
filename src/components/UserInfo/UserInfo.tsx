import React, { FC, useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { useQuery } from '@apollo/client';
import { AvatarCell, StyledDiv } from './styles';
import { PoppinsText } from '../../shared';
import { GET_USER_INFO, UserInfoNode } from '../../api/userInfo';

/**
 * User info in navigation menu
 */
export const UserInfo: FC = () => {

    const {loading, data} = useQuery<UserInfoNode>(GET_USER_INFO);
    const [avatarUrl, setAvatarUrl] = useState<string>('');
    const [name, setName] = useState<string>('Github User');
    const [login, setLogin] = useState<string>('')

    useEffect(() => {
        if (!loading) {
            setAvatarUrl(data?.viewer.avatarUrl ?? '');
            setName(data?.viewer.name ?? 'Github User');
            setLogin(data?.viewer.login ?? '');
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
