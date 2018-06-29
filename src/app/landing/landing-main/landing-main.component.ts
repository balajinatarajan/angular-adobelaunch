import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonPageComponent } from '../../shared/abstract/common-page-component.abstract';
import { NavigationEventsService } from '../../shared/services/navigation-events.service';
import { FlepzAccountService } from '../../shared/services/flepz-account.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'class': 'col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12'
  },
})
export class LandingMainComponent extends CommonPageComponent {

  flepzAccountForm: FormGroup;

  ngOnInit(){
    this.flowname = "Winback";
    this.pagename = "FLEPZ Landing";
    super.ngOnInit();
  }

  constructor(
    private router: Router,
    private flepzService: FlepzAccountService,
    protected navEvents: NavigationEventsService
  ) {
    super(navEvents);
  }

  showOffers() {
    this.router.navigate(['offers']);
  }

}
