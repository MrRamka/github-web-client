import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { RepositoryNode } from '../../api/search';
import { RepositoryList } from '../RepositoryList';
import { UserRepositories } from '../../api/userRepositories';
import { GET_USER_REPOSITORIES } from '../../api/userRepositories/queries';


/**
 * List of User Repositories
 * @see RepositoryList
 */
export const UserRepositoriesList: FC = () => {
    const searchVariables = {
        count: 10,
    };
    const {loading, data} = useQuery<UserRepositories>(GET_USER_REPOSITORIES, {
        variables: {...searchVariables}
    });
    const [repositories, setRepositories] = useState<RepositoryNode[]>([]);

    useEffect(() => {
        if (!loading) {
            setRepositories(data?.viewer.repositories.nodes ?? []);
        }
    }, [loading, data])

    return (
        <RepositoryList data={repositories} loading={loading} pageSize={4}/>
    );
}
