import React, { FC } from 'react';
import { SearchTypes } from '../types';
import { SearchVariables } from './types';
import { SearchRepositoriesList } from '../../SearchRepositoriesList';
import { UserSearchPage } from '../../UserSearchPage';


interface ResultListProps {
    value: string;
    searchType: SearchTypes;
}

export const ResultList: FC<ResultListProps> = ({value, searchType}) => {

     const isRepositorySearch = searchType === SearchTypes.REPOSITORY;

    //todo: add debounce
    const searchVariables: SearchVariables = {
        count: 20,
        type: searchType,
        query: value
    }

    return (
        isRepositorySearch ?
            <SearchRepositoriesList searchVariables={searchVariables}/> :
            <UserSearchPage searchVariables={searchVariables}/>
    );
}
