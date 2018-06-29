import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingOffersComponent } from './landing-offers/landing-offers.component';
import { LandingCreditCardComponent } from './landing-credit-card/landing-credit-card.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { LandingThankYouComponent } from './landing-thank-you/landing-thank-you.component';
import { OffersResolver } from '../shared/resolvers/offers.resolver';
import { FlepzAccountExistsGuard } from '../shared/guards/flepz-account-exists.guard';
import { OfferIsSelectedGuard } from '../shared/guards/offer-is-selected.guard';
const routes: Routes = [
    {
        path: '',
        component: LandingLayoutComponent,
        children: [
            {
                path: '',
                component: LandingMainComponent
            },
            {
                path: 'offers',
                component: LandingOffersComponent,
                resolve: {
                    offers: OffersResolver
                },
                canActivate: [FlepzAccountExistsGuard]
            },
            {
                path: 'credit-card',
                component: LandingCreditCardComponent,
                canActivate: [OfferIsSelectedGuard]
            },
            {
                path: 'thank-you',
                component: LandingThankYouComponent
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [OffersResolver, FlepzAccountExistsGuard, OfferIsSelectedGuard]
})
export class LandingRoutingModule { }
