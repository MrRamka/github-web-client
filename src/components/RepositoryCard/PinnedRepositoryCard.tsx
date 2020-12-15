import React, { FC } from 'react';
import { Language } from './types';
import { RepositoryPreviewCard } from '../../shared';
import { RepositoryLanguage } from '../RepositoryLanguage';

interface RepositoryCardProps {
    name: string;
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
export const PinnedRepositoryCard: FC<RepositoryCardProps> = ({name, languages}) => {

    return (
        <RepositoryPreviewCard title={name}>
            <RepositoryLanguage languages={languages}/>
        </RepositoryPreviewCard>
    );
}
