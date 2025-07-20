import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GRAPHQL_PROVIDERS } from '../core/graphql/graphql.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ...GRAPHQL_PROVIDERS]
};
