import React, { FC } from 'react';
import { BaseProfileNode } from '../../api/profile';
import { ImageInfoBlock, InfoBlock, TextInfoBlock } from './styles';
import { Avatar } from 'antd';
import { ProfileInfoText } from '../ProfileInfoText';

type Props = {
    data: BaseProfileNode;
}

export const ProfileInfo: FC<Props> = ({data}) => {

    return (
        <InfoBlock>
            <ImageInfoBlock>
                <Avatar src={data.avatarUrl} shape="circle" size={256}/>
            </ImageInfoBlock>
            <TextInfoBlock>
                <ProfileInfoText
                    name={data.name}
                    login={data.login}
                    followers={data.followers.totalCount}
                    following={data.following.totalCount}
                    url={data.url}
                />
            </TextInfoBlock>
        </InfoBlock>
    );
}
