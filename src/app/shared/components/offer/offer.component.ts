import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Offer } from '../../interfaces/offer.interface';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() offerData: Offer;
  @Output() selected = new EventEmitter<Offer>();

  id: number;

  constructor(
    private offerService: OfferService
  ) { }

  offerClick($ev: Event) {
    this.offerService.selectedOffer = this.offerData;
    this.selected.emit(this.offerData);
  }

  offerIsSelected(): boolean {
    const selectedOffer = this.offerService.selectedOffer;
    return selectedOffer && selectedOffer.id === this.offerData.id;
  }

  ngOnInit() {
    this.id = Date.now();
  }

}
