import { Injectable } from '@angular/core';
import { Offer } from '../interfaces/offer.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OfferService {

  selectedOffer: Offer;

  constructor(
    private http: HttpClient
  ) { }

  getOffers(): Observable<Offer[]> {
    return this.http.get(environment.APIS.PACKAGES).pipe(map((response) => {
      return response as Offer[];
    }));
  }
}
