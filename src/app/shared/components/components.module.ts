import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlepzComponent } from './flepz/flepz.component';
import { OfferComponent } from './offer/offer.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FlepzComponent, OfferComponent, CreditCardComponent],
  exports: [FlepzComponent, OfferComponent, CreditCardComponent]
})
export class ComponentsModule { }
