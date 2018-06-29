import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { FlepzAccountService } from '../services/flepz-account.service';
import { OfferService } from '../services/offer.service';

@Injectable()
export class OfferIsSelectedGuard implements CanActivate {
    constructor(private offerService: OfferService, private router: Router) { }

    canActivate(): boolean {
        if (this.offerService.selectedOffer) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
