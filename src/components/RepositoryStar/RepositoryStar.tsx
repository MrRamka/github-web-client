import React, { FC } from 'react';
import Text from 'antd/es/typography/Text';
import { Star, Wrapper } from './styles';

interface RepositoryStarProps {
    count: number,
}

export const RepositoryStar: FC<RepositoryStarProps> = ({count}) => {

    return (
        <Wrapper>
            <Star />
            <Text>{count}</Text>
        </Wrapper>
    )

}
