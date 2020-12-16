import React, { FC, useCallback } from 'react';
import { Language } from './types';
import { RepositoryPreviewCard } from '../../shared';
import { RepositoryStar } from '../RepositoryStar';
import { RepositoryLanguage } from '../RepositoryLanguage';
import { Typography } from 'antd';
import { useHistory } from 'react-router';
import { formatDate } from '../../helpers/formatDate';

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

        const formatted_date = formatDate(pushedAt);
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
