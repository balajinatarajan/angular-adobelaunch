import { Component, OnInit } from '@angular/core';
import { CommonPageComponent } from '../../shared/abstract/common-page-component.abstract';

@Component({
  selector: 'app-landing-credit-card',
  templateUrl: './landing-credit-card.component.html',
  styleUrls: ['./landing-credit-card.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'class': 'col-4 offset-4'
  },
})
export class LandingCreditCardComponent extends CommonPageComponent {


}
