import { gql } from 'apollo-boost';

export const GET_USER_REPOSITORIES = gql`
    query ($count: Int!){
        viewer {
            repositories(first: $count){
                nodes {
                    nameWithOwner
                    url
                    description
                    pushedAt
                    stargazerCount
                    languages(first: 10, orderBy: {direction: DESC, field: SIZE}) {
                        nodes {
                            name
                            color
                        }
                        totalCount
                    }
                }
            }
        }
    }
`;
