import React, { FC, useCallback } from 'react';
import { Language } from './types';
import { RepositoryPreviewCard } from '../../shared';
import { RepositoryStar } from '../RepositoryStar';
import { RepositoryLanguage } from '../RepositoryLanguage';
import { Typography } from 'antd';
import { useHistory } from 'react-router';

const {Text} = Typography;

interface RepositoryCardProps {
    name: string;
    nameWithOwner: string;
    owner: string;
    description: string;
    pushedAt: string;
    stargazerCount: number;
    languages: Language[];
    hasStarred: boolean;
    id: string;
}

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/**
 * Search repository card
 */
export const RepositoryCard: FC<RepositoryCardProps> =
    ({
         name,
         nameWithOwner,
         owner,
         description,
         pushedAt,
         stargazerCount,
         languages,
         hasStarred,
         id
     }) => {

        /**
         * Format date
         */
        const date = new Date(Date.parse(pushedAt));
        const formatted_date = date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()
        const history = useHistory()
        const handleClick = useCallback(() => { history.push(`/repository/${owner}/${name}`) }, [history, owner, name])
        return (
            <RepositoryPreviewCard title={nameWithOwner} onClick={handleClick}>
                {description ? (<>{description} <br/><br/></>) : null}
                <Text>Updated: {formatted_date}</Text>
                <RepositoryStar count={stargazerCount} hasStarred={hasStarred} id={id}/>
                <RepositoryLanguage languages={languages}/>
            </RepositoryPreviewCard>
        );
    }
