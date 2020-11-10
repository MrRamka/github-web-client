import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { get_repositories, RepositorySearchInfo } from '../../../api/search';
import { List } from 'antd';
import { RepositoryCard } from '../../RepositoryCard';


interface ResultListProps {
    value: string;
    searchType: string;
}

const emptyResult: RepositorySearchInfo = {
    search: {
        nodes: [{
            nameWithOwner: '',
            url: '',
            description: '',
            updatedAt: '',
            stargazerCount: 0,
            languages: {
                nodes: [{
                    name: '',
                    color: '',
                }],
                totalCount: 0
            },
            totalCount: 0,
        }]
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
            loading={loading}
            itemLayout="horizontal"
            dataSource={repositoryResult.search.nodes}
            //todo: add render
            renderItem={item => (
                <RepositoryCard name={item.nameWithOwner} description={item.description} updatedAt={item.updatedAt}
                                languages={item.languages.nodes} stargazerCount={item.stargazerCount}/>)}
        />
    );
}
