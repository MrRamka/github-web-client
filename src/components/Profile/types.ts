import { BaseProfileNode, ProfileNode } from '../../api/profile';
import { UserProfileNode } from '../../api/user';

export const baseEmptyProfileInfo: BaseProfileNode = {
    avatarUrl: '',
    followers: {totalCount: 0},
    following: {totalCount: 0},
    login: '',
    name: '',
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
