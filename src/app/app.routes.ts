import { Routes } from '@angular/router';
import { HotelsComponent } from '../features/hotels/hotels.component';
import { ForecastComponent } from '../features/forecast/forecast.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'hotels',
        component: HotelsComponent,
      },
      {
        path: 'forecast',
        component: ForecastComponent,
      },
    ],
  },
];
