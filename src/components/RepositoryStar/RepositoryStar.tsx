import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Text from 'antd/es/typography/Text';
import { StyledStarFilled, StyledStarOutlined, Wrapper } from './styles';
import { useMutation } from '@apollo/client';
import { ADD_STARR_QUERY, REMOVE_STARR_QUERY, RemoveStarResponse } from '../../api/starRepository';
import { AddStarResponse } from '../../api/starRepository';
import { message } from 'antd';
import { Errors } from '../../constants';

interface RepositoryStarProps {
    count: number,
    hasStarred: boolean,
    id: string,
}

/**
 * Render and update repository star
 */
export const RepositoryStar: FC<RepositoryStarProps> = ({ count, hasStarred, id }) => {
    const emptyData: AddStarResponse = useMemo(() => {
        return {
            addStar: {
                starrable: {
                    stargazerCount: count,
                    viewerHasStarred: hasStarred
                }
            }
        }
    }, [count, hasStarred]);
    const [countStars, setCountStars] = useState<number>(count)
    const [starred, setStarred] = useState<boolean>(hasStarred);
    const [addStar] = useMutation<AddStarResponse>(ADD_STARR_QUERY);
    const [removeStar] = useMutation(REMOVE_STARR_QUERY);

    useEffect(() => {
        setCountStars(count);
    }, [count]);

    /**
     * Add star function
     */
    const handleAddStar = useCallback((event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        addStar({ variables: { id } }).then(value => {
            const data: AddStarResponse = value.data ?? emptyData;
            setCountStars(data.addStar.starrable.stargazerCount);
            setStarred(data.addStar.starrable.viewerHasStarred);
        }).catch(() => message.error(Errors.ACCESS_RESTRICTED, 7));
    }, [id, setCountStars, setStarred, addStar, emptyData]);

    /**
     * Remove star function
     */
    const handleRemoveStar = useCallback((event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        removeStar({ variables: { id } }).then(value => {
            const data: RemoveStarResponse = value.data ?? emptyData;
            setCountStars(data.removeStar.starrable.stargazerCount);
            setStarred(data.removeStar.starrable.viewerHasStarred);
        }).catch(() => message.error(Errors.ACCESS_RESTRICTED, 7));
    }, [id, removeStar, emptyData])

    return (
        <Wrapper>
            {starred ? <StyledStarFilled onClick={handleRemoveStar}/> :
                <StyledStarOutlined onClick={handleAddStar}/>}
            <Text> {countStars}</Text>
        </Wrapper>
    )
}
