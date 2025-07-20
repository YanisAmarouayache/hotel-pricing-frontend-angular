// graphql.module.ts
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { inject } from '@angular/core';
import { environment } from '../../environment/environment';

const api = environment.graphqlUrl;

export const GRAPHQL_PROVIDERS = [
  provideApollo(() => {
    const httpLink = inject(HttpLink);
    return {
      link: httpLink.create({ uri: api }),
      cache: new InMemoryCache(),
    };
  }),
];
