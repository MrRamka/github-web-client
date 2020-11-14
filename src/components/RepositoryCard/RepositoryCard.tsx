import React, { FC } from 'react';
import { Language } from './types';
import { RepositoryPreviewCard } from '../../shared';
import { RepositoryStar } from '../RepositoryStar';
import { RepositoryLanguage } from '../RepositoryLanguage';
import { Typography } from 'antd';

const {Text} = Typography;

interface RepositoryCardProps {
    name: string;
    description: string;
    pushedAt: string;
    stargazerCount: number;
    languages: Language[];
    hasStarred: boolean;
}
const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export const RepositoryCard: FC<RepositoryCardProps> = ({name, description, pushedAt, stargazerCount, languages, hasStarred}) => {

    const date = new Date(Date.parse(pushedAt));
    const formatted_date = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()

    return (
        <RepositoryPreviewCard title={name}>
            {description}
            <br/>
            <br/>
            <Text>Updated: {formatted_date}</Text>
            <RepositoryStar count={stargazerCount} hasStarred={hasStarred}/>
            <RepositoryLanguage languages={languages}/>
        </RepositoryPreviewCard>
    );
}
