import React, { FC, useCallback } from 'react';
import { ProfileWrapper } from '../Profile/styles';
import { Col, Row } from 'antd';
import { ProfileInfo } from '../ProfileInfo';
import { PinnedItems } from '../PinnedItems';
import { BaseProfileNode } from '../../api/profile';
import { RepositoryNode } from '../../api/search';
import { ContributionCalendarWrapper } from './styles';
import { ContributionCalendar } from '../Calendar';
import { useHistory } from 'react-router';
import { Typography } from 'antd';
const { Link } = Typography;

type BaseUserProfileProps = {
    user: BaseProfileNode;
    loading: boolean;
    pinnedItems: RepositoryNode[];
}

/**
 * Component for rendering user profile
 */
export const BaseUserProfile: FC<BaseUserProfileProps> = ({user, pinnedItems, loading}) => {
    const history = useHistory();
    const handleClick = useCallback(() => {
        history.push(`/repositories/${user.login}`);
    }, [history, user])

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
                            <Link onClick={handleClick}>
                                <h3 style={{fontWeight: 'lighter'}}>See all repositories</h3>
                            </Link>
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
