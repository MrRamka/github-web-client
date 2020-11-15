import React, { FC, useEffect, useState } from 'react';
import { RepositoryList } from '../RepositoryList';
import { SearchVariables } from '../Search/components/types';
import { useQuery } from '@apollo/client';
import GET_SEARCH_QUERY from '../../api/search/queries';
import { RepositoryNode, RepositorySearchInfo } from '../../api/search';

type RepositorySearchPageProps = {
    searchVariables: SearchVariables;
}

export const SearchRepositoriesList: FC<RepositorySearchPageProps> = ({searchVariables}) => {

    const [repositoryResult, setRepositoryResult] = useState<RepositoryNode[]>([])

    const {loading, data} = useQuery<RepositorySearchInfo>(GET_SEARCH_QUERY, {
        variables: {...searchVariables}
    })

    useEffect(() => {
        if (!loading) {
            setRepositoryResult(data?.search.nodes ?? []);
        }
    }, [loading, data]);


    return (
        <RepositoryList data={repositoryResult} loading={loading}/>
    );
}
