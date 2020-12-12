import { RepositoryNode } from '../search';
import { ContributionCalendarConnNode } from '../calendar';

export interface ProfileNode {
    viewer: BaseProfileNode;
}

export interface BaseProfileNode {
    id: string;
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
    contributionsCollection: {
        contributionCalendar: ContributionCalendarConnNode;
    }
}
