import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY, RepositoryNode, RepositoryFile } from '../../api/repository';
import { useParams } from 'react-router';
import { RepositoryOpened } from '../RepositoryOpened';
import { RepositoryClosed } from '../RepositoryClosed';

const initialRepository: RepositoryNode = {
    repository: {
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
 Repository component
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

    /**
     * Get data from server
     */
    const {loading, data} = useQuery<RepositoryNode>(GET_REPOSITORY, {
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
            if (data?.repository?.isArchived || data?.repository?.isPrivate ||
                data?.repository?.isDisabled || data?.repository?.isEmpty ||
                data?.repository?.isLocked || data?.repository?.isSecurityPolicyEnabled) {
                setOpen(false);
                return;
            }
            setRepositoryFiles(data?.repository?.object.entries ?? [])
        }
    }, [loading, data])

    return (
        <>
            {open ? (
                    <RepositoryOpened loading={loading} files={repositoryFiles} info={repositoryInfo}
                                      repository={repository} username={username}/>) :
                    <RepositoryClosed/>
            }
        </>
    );
}
