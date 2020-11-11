import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { get_repositories, RepositorySearchInfo } from '../../../api/search';
import { List } from 'antd';
import { renderRepositoryCard } from '../../RepositoryCard/renders';


interface ResultListProps {
    value: string;
    searchType: string;
}

const emptyResult: RepositorySearchInfo = {
    search: {
        nodes: []
    },
}

export const ResultList: FC<ResultListProps> = ({value, searchType}) => {

    const [repositoryResult, setRepositoryResult] = useState<RepositorySearchInfo>(emptyResult)

    //todo: add debounce
    const searchVariables = {
        count: 5,
        type: searchType,
        query: value
    }

    const {loading, data} = useQuery<RepositorySearchInfo>(get_repositories, {
        variables: {...searchVariables}
    })

    useEffect(() => {
        if (!loading) {
            setRepositoryResult(data ?? emptyResult);
        }
    }, [loading, data])

    return (
        <List
            style={{width: '50%'}}
            loading={loading}
            itemLayout="horizontal"
            dataSource={repositoryResult.search.nodes}
            renderItem={renderRepositoryCard}
        />
    );
}
