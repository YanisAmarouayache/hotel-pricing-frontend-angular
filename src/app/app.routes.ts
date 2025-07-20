import { Routes } from '@angular/router';
import { HotelsComponent } from '../features/hotels/hotels.component';

export const routes: Routes = [
  {
    path: 'hotels',
        component: HotelsComponent,
    },
    {
        path: '**',
        redirectTo: '', // This will redirect any unmatched route to `/`
  },
];
