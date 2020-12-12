import { RepositoryNode } from '../search';

export interface ProfileNode {
    viewer: BaseProfileNode;
}

export interface BaseProfileNode {
    login: string;
    name: string;
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number
    };
    url: string;
    avatarUrl: string;
    pinnedItems: {
        nodes: RepositoryNode[];
    }
}
