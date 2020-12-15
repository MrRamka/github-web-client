import React, { FC } from 'react';
import { ProfileWrapper } from '../Profile/styles';
import { Col, Row } from 'antd';
import { ProfileInfo } from '../ProfileInfo';
import { PinnedItems } from '../PinnedItems';
import { BaseProfileNode } from '../../api/profile';
import { RepositoryNode } from '../../api/search';
import { ContributionCalendarWrapper } from './styles';
import { ContributionCalendar } from '../Calendar';

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
                        <ContributionCalendarWrapper>
                            <h2>Contribution Calendar</h2>
                            <ContributionCalendar login={user.login} calendarData={user.contributionsCollection.contributionCalendar}/>
                        </ContributionCalendarWrapper>
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
