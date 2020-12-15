import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { Routes as R } from '../constants';

const httpLink = new HttpLink({uri: R.API});

/**
 * Add github token to Apollo Client
 */
const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    const token = localStorage.getItem('github_token');

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : ''
        }
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});

/**
 * Apollo Client fo API calls
 */
export const client = new ApolloClient({
    link: authLink.concat(httpLink), // Chain it with the HttpLink
    cache: new InMemoryCache()
});
