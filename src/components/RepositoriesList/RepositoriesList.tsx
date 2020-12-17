import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { RepositoryNode } from '../../api/search';
import { RepositoryList } from '../RepositoryList';
import { useParams } from 'react-router';
import { GET_USER_QUERY, UserProfileNode } from '../../api/user';
import { AvatarBlock } from '../NavigationMenu/styles';
import { UserInfoBlock } from '../UserInfoBlock';
import { ApolloError } from '@apollo/client/errors';
import { Spin } from 'antd';
import { NotFoundPage } from '../../pages/NotFound';


/**
 * Repositories List for any user
 * @see RepositoryList
 */
export const RepositoriesList: FC = () => {
    const {username: login} = useParams();

    const searchVariables = {
        count: 10,
        login: login,
    };
    const {loading, data, error} = useQuery<UserProfileNode>(GET_USER_QUERY, {
        variables: {...searchVariables}
    });
    const [repositories, setRepositories] = useState<RepositoryNode[]>([]);
    const [errors, setErrors] = useState<ApolloError>();

    useEffect(() => {
        if (!loading) {
            if (error) {
                setErrors(error);
                return;
            }
            setRepositories(data?.user.repositories.nodes ?? []);
        }
    }, [loading, data, error])

    return (
        <Spin spinning={loading}>
            {!errors ?
                <>
                    <AvatarBlock>
                        <UserInfoBlock/>
                    </AvatarBlock>
                    <RepositoryList data={repositories} loading={loading} pageSize={4}/>
                </>
                : <NotFoundPage subTitle={errors?.message}/>
            }
        </Spin>
    );
}
