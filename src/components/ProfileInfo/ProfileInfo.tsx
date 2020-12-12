import React, { FC } from 'react';
import { ProfileNode } from '../../api/profile';
import { ImageInfoBlock, InfoBlock, TextInfoBlock } from './styles';
import { Avatar } from 'antd';
import { ProfileInfoText } from '../ProfileInfoText';

type Props = {
    data: ProfileNode;
}

export const ProfileInfo: FC<Props> = ({data}) => {


    return (
        <InfoBlock>
            <ImageInfoBlock>
                <Avatar src={data.viewer.avatarUrl} shape="circle" size={256}/>
            </ImageInfoBlock>
            <TextInfoBlock>
                <ProfileInfoText
                    name={data.viewer.name}
                    login={data.viewer.login}
                    followers={data.viewer.followers.totalCount}
                    following={data.viewer.following.totalCount}
                    url={data.viewer.url}
                />
            </TextInfoBlock>
        </InfoBlock>
    );
}
