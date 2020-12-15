import React, { FC, useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY, Repository, RepositoryFile } from '../../api/repository';
import { useHistory, useParams } from 'react-router';
import { RepositoryFiles } from '../RepositoryFiles';
import { Button, Col, Result, Row } from 'antd';
import { RepositoryDescription } from '../RepositoryDescription';
import Title from 'antd/lib/typography/Title';

const initialRepository: Repository = {
    repository: {
        createdAt: '',
        description: '',
        diskUsage: 0,
        isArchived: false,
        isPrivate: false,
        languages: {nodes: [{color: '', name: ''}], totalCount: 0},
        object: {entries: []}
    }
};
/**
 Repository component
 */
export const RepositoryPage: FC = () => {
    const {username, repository} = useParams<{ username: string, repository: string }>();
    /**
     * State
     */
    const [open, setOpen] = useState<boolean>(true);
    const [repositoryInfo, setRepositoryInfo] = useState<Repository>(initialRepository);
    const [repositoryFiles, setRepositoryFiles] = useState<RepositoryFile[]>([]);

    /**
     * Get data from server
     */
    const {loading, data} = useQuery<Repository>(GET_REPOSITORY, {
        variables: {
            name: repository,
            owner: username,
        }
    });

    /**
     * Update data
     */
    useEffect(() => {
        if (!loading) {
            setRepositoryInfo(data ?? initialRepository);
            if (data?.repository.isArchived || data?.repository?.isPrivate) {
                setOpen(false);
                return;
            }
            setRepositoryFiles(data?.repository?.object.entries ?? [])
        }
    }, [loading, data])
    const history = useHistory();
    const handleClick = useCallback(() => {
        history.goBack()
    }, [history])
    const handleOwnerClick = useCallback(() => {
        history.push(`/users/${username}`)
    }, [history])
    return (
        <>
            {open ? (
                    <>
                        <Title style={{fontWeight: 'lighter'}}><span
                            onClick={handleOwnerClick}>{username}</span>/{repository}</Title>
                        <Row justify="space-between">
                            <Col span={18}>
                                <RepositoryFiles files={repositoryFiles} loading={loading}/>
                            </Col>
                            <Col span={5}>
                                <RepositoryDescription info={repositoryInfo} loading={loading}/>
                            </Col>
                        </Row>
                    </>) :
                    <Result status="warning" title="This repository is archived or private."
                            extra={
                                <Button type="primary" key="console" onClick={handleClick}>
                                    Go Back
                                </Button>
                            }
                    />}
        </>
    );
}
