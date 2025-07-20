import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { HotelsComponent } from './hotels.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HotelsComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsComponent, ApolloTestingModule],
      providers: [provideHttpClient(withInterceptorsFromDi())],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
