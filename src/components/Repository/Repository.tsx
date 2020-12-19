import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY, RepositoryFile, RepositoryNode } from '../../api/repository';
import { useParams } from 'react-router';
import { RepositoryOpened } from '../RepositoryOpened';
import { RepositoryClosed } from '../RepositoryClosed';
import { Spin } from 'antd';
import { ApolloError } from '@apollo/client/errors';
import { NotFoundPage } from '../../pages/NotFound';

const initialRepository: RepositoryNode = {
    repository: {
        viewerHasStarred: false,
        stargazerCount: 0,
        id: '',
        createdAt: '',
        description: '',
        diskUsage: 0,
        isArchived: false,
        isPrivate: false,
        isDisabled: false,
        isEmpty: false,
        isLocked: false,
        isSecurityPolicyEnabled: false,
        languages: {nodes: [{color: '', name: ''}], totalCount: 0},
        object: {entries: []}
    }
};

/**
 RepositoryPage component
 */
export const Repository: FC = () => {
    /**
     * Params for query
     */
    const {username, repository} = useParams<{ username: string, repository: string }>();
    /**
     * State
     */
    const [open, setOpen] = useState<boolean>(true);
    const [repositoryInfo, setRepositoryInfo] = useState<RepositoryNode>(initialRepository);
    const [repositoryFiles, setRepositoryFiles] = useState<RepositoryFile[]>([]);
    const [errors, setErrors] = useState<ApolloError>();

    /**
     * Get data from server
     */
    const {loading, data, error} = useQuery<RepositoryNode>(GET_REPOSITORY, {
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
            if (error) {
                setErrors(error);
                return;
            }
            setRepositoryInfo(data ?? initialRepository);
            if (data?.repository?.isArchived || data?.repository?.isPrivate ||
                data?.repository?.isDisabled || data?.repository?.isEmpty ||
                data?.repository?.isLocked || data?.repository?.isSecurityPolicyEnabled) {
                setOpen(false);
                return;
            }
            setRepositoryFiles(data?.repository?.object?.entries ?? [])
        }
    }, [loading, data, error])

    return (
        <Spin spinning={loading}>
            {!errors ?
                <>
                    {open ?
                        <RepositoryOpened
                            loading={loading}
                            files={repositoryFiles}
                            info={repositoryInfo}
                            repository={repository}
                            username={username}
                        /> :
                        <RepositoryClosed/>
                    }
                </> :
                <NotFoundPage subTitle={errors?.message}/>
            }
        </Spin>
    );
}
