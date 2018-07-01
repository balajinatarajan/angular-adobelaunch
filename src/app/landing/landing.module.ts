import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { ComponentsModule } from '../shared/components/components.module';
import { LandingOffersComponent } from './landing-offers/landing-offers.component';
import { OfferService } from '../shared/services/offer.service';
import { LandingCreditCardComponent } from './landing-credit-card/landing-credit-card.component';
import { LandingThankYouComponent } from './landing-thank-you/landing-thank-you.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { FlepzAccountService } from '../shared/services/flepz-account.service';
import { LandingOffersVariantAComponent } from './landing-offers-variant-a/landing-offers-variant-a.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingMainComponent,
    LandingOffersComponent,
    LandingCreditCardComponent,
    LandingThankYouComponent,
    LandingLayoutComponent,
    LandingOffersVariantAComponent
  ],
  providers: [
    OfferService,
    FlepzAccountService
  ]
})
export class LandingModule { }
