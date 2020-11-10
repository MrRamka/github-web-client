import React, { FC, useCallback, useMemo, useState } from 'react';
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
    }, [])

    const selectSearchItem = useMemo(() => (
        <Select defaultValue={SearchTypes.REPOSITORY} className="select-before" style={{width: 150}}
                onChange={onChangeSearchType}>
            <Option value={SearchTypes.REPOSITORY}>{SearchTypes.REPOSITORY}</Option>
            <Option value={SearchTypes.USER}>{SearchTypes.USER}</Option>
        </Select>
    ), []);

    const onSearch = useCallback((value) => {
        setSearchValue(value);
        history.push(R.EXPLORE);
    }, [history]);

    const onClick = useCallback(() => {
        //history.push(R.EXPLORE);
    }, [history]);

    return (
        <Search addonBefore={selectSearchItem} placeholder="Global search" size="large" onSearch={onSearch}
                onClick={onClick} allowClear/>
    );
}
