import React, { FC } from 'react';
import Text from 'antd/es/typography/Text';
import { StyledStarFilled, StyledStarOutlined, Wrapper } from './styles';

interface RepositoryStarProps {
    count: number,
    hasStarred: boolean,
}

export const RepositoryStar: FC<RepositoryStarProps> = ({count, hasStarred}) => {

    return (
        <Wrapper>
            {hasStarred? <StyledStarFilled/> : <StyledStarOutlined/>}
            <Text> {count}</Text>
        </Wrapper>
    )

}
