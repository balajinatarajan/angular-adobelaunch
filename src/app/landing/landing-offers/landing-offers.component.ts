import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../shared/services/offer.service';
import { Offer } from '../../shared/interfaces/offer.interface';
import { CommonPageComponent } from '../../shared/abstract/common-page-component.abstract';
import { NavigationEventsService } from '../../shared/services/navigation-events.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FlepzAccountService } from '../../shared/services/flepz-account.service';

@Component({
  selector: 'app-landing-offers',
  templateUrl: './landing-offers.component.html',
  styleUrls: ['./landing-offers.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'col'
  }
})
export class LandingOffersComponent extends CommonPageComponent implements OnInit {

  offers: Offer[];
  private selectedOffer: Offer;

  constructor(
    private offerService: OfferService,
    private activatedRoute: ActivatedRoute,
    protected navEvents: NavigationEventsService,
    private flepzAccountService: FlepzAccountService
  ) {
    super(navEvents);
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.offers = params.offers;
      
      //Expose offers to data layer 
      let datalayer = window["datalayer"] || {};
      datalayer["offers"] = params.offers;
      //Expose Account to data layer 
      datalayer["account"] = this.flepzAccountService.account;
      window["datalayer"] = datalayer;

      this.flowname = "Winback";
      this.pagename = "Show Offers";

      super.ngOnInit();
    });
  }

  setSelectedOffer(offer) {
    this.selectedOffer = offer;
  }
}
