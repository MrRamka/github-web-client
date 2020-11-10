import { gql } from 'apollo-boost';

export const get_repositories = gql`
query ($count: Int!, $type: SearchType!, $query: String!) {
  search(first: $count, type: $type, query: $query) {
    nodes {
      ... on Repository {
        nameWithOwner
        url
        description
        updatedAt
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
