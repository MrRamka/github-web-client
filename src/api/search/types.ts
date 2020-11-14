export interface RepositorySearchInfo {
    search: {
        nodes: RepositoryNode[],
    }
}

export interface RepositoryNode {
    id: string,
    nameWithOwner: string,
    url: string,
    description: string,
    pushedAt: string,
    stargazerCount: number,
    languages: {
        nodes: [{
            name: string,
            color: string,
        }],
        totalCount: number
    },
    totalCount: number,
    viewerHasStarred: boolean,
}

export interface UserSearchInfo {
    search: {
        nodes: UserNode[],
    }
}

export interface UserNode {
    login: string,
    url: string,
    name: string,
    email: string,
    avatarUrl: string,
    bio: string,
    followers: {
        totalCount: number,
    },
    following: {
        totalCount: number,
    },
    repositories: {
        totalCount: number,
    }
    __typename: TypeName;
}

export enum TypeName {
    USER = 'User',
    ORGANIZATION = 'Organization',
}
