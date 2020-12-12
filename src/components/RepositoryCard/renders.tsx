import { RepositoryNode } from '../../api/search';
import { RepositoryCard } from './RepositoryCard';
import React from 'react';
import { PinnedRepositoryCard } from './PinnedRepositoryCard';


export const renderRepositoryCard = (item: RepositoryNode) => (
    <RepositoryCard
        name={item.nameWithOwner}
        description={item.description}
        pushedAt={item.pushedAt}
        languages={item.languages.nodes}
        stargazerCount={item.stargazerCount}
        hasStarred={item.viewerHasStarred}
        id={item.id}
    />
);

export const renderPinnedRepositoryCard = (item: RepositoryNode) => (
    <PinnedRepositoryCard
        name={item.nameWithOwner}
        description={item.description}
        pushedAt={item.pushedAt}
        languages={item.languages.nodes}
        stargazerCount={item.stargazerCount}
        hasStarred={item.viewerHasStarred}
        id={item.id}
    />
);
