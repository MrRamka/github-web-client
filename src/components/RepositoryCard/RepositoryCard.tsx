import React, { FC } from 'react';
import { Language } from './types';
import { Card } from 'antd';

interface RepositoryCardProps {
    name: string,
    description: string,
    updatedAt: string,
    stargazerCount: number,
    languages: Language[],
}

export const RepositoryCard: FC<RepositoryCardProps> = ({name, description, updatedAt,}) => {
    //todo: add styles
    return (
        <Card title={name}>{description}</Card>
    );
}
