import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OfferService } from '../services/offer.service';
import { Offer } from '../interfaces/offer.interface';
import { Observable } from 'rxjs';

@Injectable()
export class OffersResolver implements Resolve<Offer[]> {
    constructor(private offerService: OfferService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Offer[]> {
        return this.offerService.getOffers();
    }
}
