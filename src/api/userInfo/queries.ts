import { gql } from 'apollo-boost';

export const GET_USER_INFO = gql`
	query GetUserAvatar{
  		viewer {
  		    id
    		avatarUrl
      		name
      		login
    	}
  	}
`;
