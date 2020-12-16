import React, { FC, useState } from 'react';
import { GlobalSearch } from '../Search';
import { ResultList } from '../Search/components/ResultList';
import { SearchTypes } from '../Search/types';

/**
 * Component for search page
 */
export const ExploreList: FC = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [searchType, setSearchType] = useState<SearchTypes>(SearchTypes.REPOSITORY);


    return (
        <>
            <GlobalSearch setSearchValue={setSearchValue} setSearchType={setSearchType}/>
            <ResultList value={searchValue} searchType={searchType}/>
        </>
    );

}
