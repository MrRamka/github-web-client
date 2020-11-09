import React, { FC, useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { Avatar } from 'antd';
import { useQuery } from '@apollo/client';
import { AvatarCell, StyledDiv } from './styles';
import { PoppinsText } from '../../shared/PoppinsText';

interface UserInfo {
    viewer: {
        avatarUrl: string,
        name: string,
        login: string,
    }
}

//FIXME add api
const GET_USER_INFO = gql`
	query GetUserAvatar{
  		viewer {
    		avatarUrl
      		name
      		login
    	}
  	}
`;

export const UserInfo: FC = () => {

    const {loading, data} = useQuery<UserInfo>(GET_USER_INFO);
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
