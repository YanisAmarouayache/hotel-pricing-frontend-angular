import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "hotels",
        loadComponent: () =>
            import('../features/hotels/hotels.component').then(m => m.HotelsComponent)
    }
];
