import { RepositoryNode } from '../search';

export interface UserRepositories {
    viewer: {
        repositories: {
            nodes: RepositoryNode[],
        }
    }
}
