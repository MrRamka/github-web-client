import { gql } from 'apollo-boost';

export const GET_REPOSITORY = gql`
    query ($name: String!, $owner: String!){
        repository(owner: $owner, name: $name) {
            createdAt
            defaultBranchRef {
                id
            }
            isArchived
            isPrivate
            description
            
            viewerHasStarred
            stargazerCount
            id
            
            languages(first: 10, orderBy: {direction: DESC, field: SIZE}) {
                nodes {
                    name
                    color
                }
                totalCount
            }
            diskUsage
            object(expression: "master:") {
                ... on Tree {
                    entries {
                        oid
                        name
                        type
                        object {
                            ... on Blob {
                                byteSize
                                isBinary
                            }
                        }
                    }
                }
            }
        }
    }
`;
