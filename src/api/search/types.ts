export interface RepositorySearchInfo {
    search: {
        nodes: RepositoryNode[],
    }
}

export interface RepositoryNode {
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
}
