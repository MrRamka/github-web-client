import React, { FC } from 'react';
import { ProfileWrapper } from '../../components/Profile/styles';
import { Col, Row } from 'antd';
import { ProfileInfo } from '../../components/ProfileInfo';
import { PinnedItems } from '../../components/PinnedItems';
import { BaseProfileNode } from '../../api/profile';
import { RepositoryNode } from '../../api/search';
import GitHubCalendar from 'react-github-calendar';
import { ContributionCalendar } from './styles';

type BaseUserProfileProps = {
    user: BaseProfileNode;
    loading: boolean;
    pinnedItems: RepositoryNode[];
}

export const BaseUserProfile: FC<BaseUserProfileProps> = ({user, pinnedItems, loading}) => {

    return (
        <ProfileWrapper>
            <Row justify="start">
                <Col span={16}>
                    <Row>
                        <ProfileInfo data={user}/>
                    </Row>
                    <Row>
                        <ContributionCalendar>
                            <h2>Contribution Calendar</h2>
                            <GitHubCalendar
                                username={user.login}
                                color="hsl(203, 82%, 33%)"
                                blockSize={16}
                                fontSize={16}
                            />
                        </ContributionCalendar>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row>
                        <PinnedItems pinnedItems={pinnedItems} loading={loading}/>
                    </Row>
                </Col>
            </Row>
        </ProfileWrapper>
    );
}
