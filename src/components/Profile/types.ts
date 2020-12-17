import { BaseProfileNode, ProfileNode } from '../../api/profile';
import { UserProfileNode } from '../../api/user';

export const baseEmptyProfileInfo: BaseProfileNode = {
    contributionsCollection: {
        contributionCalendar: {
            totalContributions: 0,
            weeks: []
        }
    },
    id: '',
    avatarUrl: '',
    followers: {totalCount: 0},
    following: {totalCount: 0},
    login: '',
    name: '',
    repositories: {
        nodes: [],
    },
    pinnedItems: {nodes: []},
    url: ''
}

export const emptyProfileInfo: ProfileNode = {
    viewer: {
        ...baseEmptyProfileInfo
    }
}

export const emptyUserProfileInfo: UserProfileNode = {
    user: {
        ...baseEmptyProfileInfo
    }
}
