import { gql } from 'apollo-boost';

export const ADD_STARR_QUERY = gql`
mutation ($id: ID!) {
  addStar(input: {starrableId: $id}) {
    starrable {
      stargazerCount
      viewerHasStarred
    }
  }
}
`;

export const REMOVE_STARR_QUERY = gql`
mutation ($id: ID!) {
  removeStar(input: {starrableId: $id}) {
    starrable {
      stargazerCount
      viewerHasStarred
    }
  }
}
`;
