import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../../shared/services/offer.service';
import { Offer } from '../../shared/interfaces/offer.interface';
import { CommonPageComponent } from '../../shared/abstract/common-page-component.abstract';
import { NavigationEventsService } from '../../shared/services/navigation-events.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FlepzAccountService } from '../../shared/services/flepz-account.service';
import '../../../launch.js';

declare var is_test_configured_for: any;
declare var route_config: any;

@Component({
  selector: 'app-landing-offers-variant-a',
  templateUrl: './landing-offers-variant-a.component.html',
  styleUrls: ['./landing-offers-variant-a.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'col'
  }
})
export class LandingOffersVariantAComponent extends CommonPageComponent implements OnInit {

  offers: Offer[];
  private selectedOffer: Offer;

  constructor(
    private router: Router,
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

      this.flowname = "winback";
      this.pagename = "show offers";

      super.ngOnInit();

      /* Check if there is an AB Testing configured
      if (typeof is_test_configured_for == "function") {
        if (is_test_configured_for(this.flowname, this.pagename)) {
          const routename = route_config[this.flowname + "_" + this.pagename]();
          //Go to new route per AB Testing tool - also skip location change so when user hits back from the variant page, they will go to the previous page instead of control. ex: landing -> offersA instead of landing -> offers -> offersA
          this.router.navigate([routename], { skipLocationChange: true });
        }
      }*/

    });
  }

  setSelectedOffer(offer) {
    this.selectedOffer = offer;
  }
}

