import { RepositoryNode } from '../../api/search';
import { RepositoryCard } from './RepositoryCard';
import React from 'react';
import { PinnedRepositoryCard } from './PinnedRepositoryCard';

/**
 * Renderers for RepositoryPage Card
 */
export const renderRepositoryCard = (item: RepositoryNode) => (
    <RepositoryCard
        key={item.id + new Date()}
        name={item.name}
        nameWithOwner={item.nameWithOwner}
        owner={item.owner.login}
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
        key={item.id + new Date()}
        name={item.name}
        nameWithOwner={item.nameWithOwner}
        owner={item.owner.login}
        description={item.description}
        pushedAt={item.pushedAt}
        languages={item.languages.nodes}
        stargazerCount={item.stargazerCount}
        hasStarred={item.viewerHasStarred}
        id={item.id}
    />
);
