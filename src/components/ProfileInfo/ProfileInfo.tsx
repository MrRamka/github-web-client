import React, { FC } from 'react';
import { BaseProfileNode } from '../../api/profile';
import { ImageInfoBlock, InfoBlock, TextInfoBlock } from './styles';
import { Avatar } from 'antd';
import { ProfileInfoText } from '../ProfileInfoText';

type Props = {
    data: BaseProfileNode;
}

/**
 * ProfilePage info component
 */
export const ProfileInfo: FC<Props> = ({data}) => {

    return (
        <InfoBlock>
            <ImageInfoBlock>
                <Avatar src={data.avatarUrl} shape="circle" size={{ xs: 50, sm: 75, md: 100, lg: 125, xl: 150, xxl: 250 }}/>
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
