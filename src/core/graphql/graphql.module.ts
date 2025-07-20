import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../../environment/environment';
import { NormalizedCacheObject } from '@apollo/client/core';

const api = environment.apiUrl;
const uri = `${api}/graphql`;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<NormalizedCacheObject> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const GRAPHQL_PROVIDERS = [
  {
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink],
  },
];
