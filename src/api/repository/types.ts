export interface RepositoryNode {
    repository: {
        createdAt: string,
        isArchived: boolean,
        isPrivate: boolean,

        description: string,
        diskUsage: number,

        viewerHasStarred: boolean,
        stargazerCount: number,
        id: string,

        languages: {
            nodes: [{
                name: string,
                color: string,
            }],
            totalCount: number
        },
        object: {
            entries: RepositoryFile[],
        }
    }
}

export interface RepositoryFile {
    oid: string,
    name: string,
    type: string,
    mode: number,
    object: {
        byteSize: number,
        isBinary: boolean,
    }
}
