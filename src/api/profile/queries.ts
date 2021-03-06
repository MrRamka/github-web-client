import { gql } from 'apollo-boost';

export const GET_PROFILE_QUERY = gql`
query($count: Int!) { 
  viewer { 
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
    },
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
