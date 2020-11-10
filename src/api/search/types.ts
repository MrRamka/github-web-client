export interface RepositorySearchInfo {
    search: {
        nodes: [{
            nameWithOwner: string,
            url: string,
            description: string,
            updatedAt: string,
            stargazerCount: number,
            languages: {
                nodes: [{
                    name: string,
                    color: string,
                }],
                totalCount: number
            },
            totalCount: number,
        }]
    },
}
