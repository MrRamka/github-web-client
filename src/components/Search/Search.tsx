import React, { FC, useCallback, useMemo } from 'react';
import { Input, Select } from 'antd';
import { useHistory } from 'react-router';
import { Routes as R } from '../../constants';
import { SearchTypes } from './types';

const {Search} = Input;
const {Option} = Select;

interface GlobalSearchProps {
    setSearchValue: (value: string) => void;
    setSearchType: (type: SearchTypes) => void;
}

export const GlobalSearch: FC<GlobalSearchProps> = ({setSearchValue, setSearchType}) => {

    const history = useHistory();

    const onChangeSearchType = useCallback((value: SearchTypes) => {
        setSearchType(value);
    }, [setSearchType])

    const selectSearchItem = useMemo(() => (
        <Select defaultValue={SearchTypes.REPOSITORY} className="select-before" style={{width: 150}}
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
        <Search autoFocus style={{width: '50%'}} addonBefore={selectSearchItem} placeholder="Global search" size="large" onSearch={onSearch}
                onClick={onClick} allowClear/>
    );
}
