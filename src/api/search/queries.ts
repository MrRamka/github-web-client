import { gql } from 'apollo-boost';

export const GET_SEARCH_QUERY = gql`
query ($count: Int!, $type: SearchType!, $query: String!) {
  search(first: $count, type: $type, query: $query) {
    nodes {
      ... on Repository {
        id
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
        viewerHasStarred
      }
      ... on User {
        login,
        url,
        avatarUrl,
        name,
        email,
        bio,
        followers {
          totalCount
        },
        following {
          totalCount
        }
        repositories {
          totalCount
        }
      }
    }
  }
}
`;

export default GET_SEARCH_QUERY;
