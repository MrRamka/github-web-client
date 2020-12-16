import React, { FC, useCallback } from 'react';
import { Language } from './types';
import { RepositoryPreviewCard } from '../../shared';
import { RepositoryLanguage } from '../RepositoryLanguage';
import { useHistory } from 'react-router';

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
 * Single Pinned Repository Card component
 * @see RepositoryPreviewCard
 * @see RepositoryLanguage
 */
export const PinnedRepositoryCard: FC<RepositoryCardProps> = ({name, languages, owner, nameWithOwner}) => {
    const history = useHistory()
    const handleClick = useCallback(() => { history.push(`/repository/${owner}/${name}`) }, [history, owner, name])
    return (
        <RepositoryPreviewCard title={nameWithOwner} onClick={handleClick}>
            <RepositoryLanguage languages={languages}/>
        </RepositoryPreviewCard>
    );
}
