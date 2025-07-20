import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable, catchError, of } from 'rxjs';
import { GetHotelsGQL, GetHotelsQuery } from '../../core/graphql/generated/graphql';
import { CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent {
  hotels: Observable<GetHotelsQuery['hotels']>;

  constructor(hotelsGQL: GetHotelsGQL) {
    this.hotels = hotelsGQL.watch().valueChanges.pipe(
      map(result => result.data?.hotels || []),
      catchError(error => {
        // eslint-disable-next-line no-undef, no-console
        console.error('Error loading hotels:', error);
        // Handle the error appropriately, e.g., show a message to the user
        return of([]);
      }),
    );
  }

  trackByHotelId(index: number, hotel: { id: number }) {
    return hotel.id;
  }
}
