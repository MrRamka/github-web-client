import Title from 'antd/lib/typography/Title';
import { Col, Row } from 'antd';
import { RepositoryFiles } from '../RepositoryFiles';
import { RepositoryDescription } from '../RepositoryDescription';
import React, { FC, useCallback } from 'react';
import { RepositoryFile, RepositoryNode } from '../../api/repository';
import { useHistory } from 'react-router';
import { UsernameWrapper } from './styles';

type RepositoryOpenedProps = {
    username: string;
    repository: string;
    info: RepositoryNode;
    files: RepositoryFile[];
    loading: boolean;
}

/**
 * Open repository content component
 */
export const RepositoryOpened: FC<RepositoryOpenedProps> = ({username, repository, info, files, loading}) => {
    /**
     * History for redirecting
     */
    const history = useHistory();
    /**
     * Handler for redirecting
     */
    const handleClick = useCallback(() => {
        history.push(`/users/${username}`)
    }, [history, username])
    return (
        <>
            <Title style={{fontWeight: 'lighter'}}>
                <UsernameWrapper onClick={handleClick}>{username}</UsernameWrapper>/{repository}
            </Title>
            <Row justify="space-between" gutter={[0, 20]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={18}>
                    <RepositoryFiles files={files} loading={loading}/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={5}>
                    <RepositoryDescription info={info} loading={loading}/>
                </Col>
            </Row>
        </>
    )
}
