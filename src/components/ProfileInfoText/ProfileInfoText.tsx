import React, { FC } from 'react';
import {
    FollowersWrapper,
    FollowingWrapper,
    GithubLinkLogo,
    InfoPositionText,
    InfoWrapper,
    LoginText,
    Name
} from './styles';
import { UserOutlined } from '@ant-design/icons/lib';
import { Col, Row } from 'antd';


type Props = {
    name: string,
    login: string;
    followers: number;
    following: number,
    url: string;
}

/**
 * Component for render profile info text
 * @constructor
 */
export const ProfileInfoText: FC<Props> = ({name, login, followers, following, url}) => {

    return (
        <InfoWrapper>
            <Name>{name}</Name>
            <LoginText>{login}</LoginText>
            <Row>
                <Col span={12} sm={24} xs={24} md={12} lg={12} xxl={12} xl={12}>
                    <FollowersWrapper>
                        <UserOutlined/>
                        <InfoPositionText>{followers} Followers </InfoPositionText>
                    </FollowersWrapper>
                    <div>
                        <GithubLinkLogo/>
                        <InfoPositionText><a href={url}>Github</a></InfoPositionText>
                    </div>
                </Col>
                <Col>
                    <FollowingWrapper>
                        <UserOutlined/>
                        <InfoPositionText>{following} Following</InfoPositionText>
                    </FollowingWrapper>
                </Col>
            </Row>

        </InfoWrapper>
    );
}
