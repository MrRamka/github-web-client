import { gql } from 'apollo-boost';

export const GET_PROFILE_QUERY = gql`
query($count: Int!) { 
  viewer { 
    login,
    name, 
    followers {
      totalCount
    }
    following {
      totalCount
    }
    url,
    avatarUrl,
    pinnedItems (first: $count){
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
      }
    }
  }
}
`;
