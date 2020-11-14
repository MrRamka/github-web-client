import React, { FC, useEffect, useState } from 'react';
import { SearchVariables } from '../Search/components/types';
import { useQuery } from '@apollo/client';
import GET_SEARCH_QUERY from '../../api/search/queries';
import { TypeName, UserNode, UserSearchInfo } from '../../api/search';
import { UserList } from '../UserList';

type UserSearchPageProps = {
    searchVariables: SearchVariables;
}

export const UserSearchPage: FC<UserSearchPageProps> = ({searchVariables}) => {

    const [userResult, setUserResult] = useState<UserNode[]>([])

    const {loading, data} = useQuery<UserSearchInfo>(GET_SEARCH_QUERY, {
        variables: {...searchVariables}
    })

    useEffect(() => {
        if (!loading) {
            const users = data?.search.nodes.filter((value) => value.__typename !== TypeName.ORGANIZATION);
            setUserResult(users ?? []);
        }
    }, [loading, data]);


    return (
        <UserList data={userResult} loading={loading}/>
    );
}
