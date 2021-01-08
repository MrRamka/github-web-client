import React, { FC, useCallback, useMemo } from 'react';
import { Select } from 'antd';
import { useHistory } from 'react-router';
import { Routes as R } from '../../constants';
import { SearchTypes } from './types';
import { Search } from './styles';

const {Option} = Select;

interface GlobalSearchProps {
    setSearchValue: (value: string) => void;
    setSearchType: (type: SearchTypes) => void;
}

/**
 * Search component
 */
export const GlobalSearch: FC<GlobalSearchProps> = ({setSearchValue, setSearchType}) => {

    const history = useHistory();

    const onChangeSearchType = useCallback((value: SearchTypes) => {
        setSearchType(value);
    }, [setSearchType])

    /**
     * Search type
     * SearchTypes.REPOSITORY or SearchTypes.USER
     * @see SearchTypes
     */
    const selectSearchItem = useMemo(() => (
        <Select defaultValue={SearchTypes.REPOSITORY} className="select-before" size='small'
                onChange={onChangeSearchType}>
            <Option value={SearchTypes.REPOSITORY}>{SearchTypes.REPOSITORY}</Option>
            <Option value={SearchTypes.USER}>{SearchTypes.USER}</Option>
        </Select>
    ), [onChangeSearchType]);

    const onSearch = useCallback((value) => {
        setSearchValue(value);
        history.push(R.EXPLORE);
    }, [history, setSearchValue]);

    const onClick = useCallback(() => {
        //history.push(R.EXPLORE);
    }, []);

    return (
        <Search autoFocus addonBefore={selectSearchItem} placeholder="Global search" size="middle" onSearch={onSearch}
                onClick={onClick} allowClear/>
    );
}
