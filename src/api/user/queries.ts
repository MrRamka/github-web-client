import { gql } from 'apollo-boost';

export const GET_USER_QUERY = gql`
query($login: String!, $count: Int!) { 
  user(login: $login) {
    id,
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
    repositories(first: $count){
      nodes {
        id
        name
        nameWithOwner
        owner {
          login
        }
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
    },
    pinnedItems (first: $count){
      nodes {
        ... on Repository {
        id
        name  
        nameWithOwner
        owner {
          login
        }
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
    contributionsCollection{
      contributionCalendar{
        totalContributions
        weeks {
          contributionDays {
            contributionCount,
            date
          }
        }
      }
    }
  }
}
`;
