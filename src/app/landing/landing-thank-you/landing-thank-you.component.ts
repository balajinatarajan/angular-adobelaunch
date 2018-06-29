import { Component, OnInit } from '@angular/core';
import { CommonPageComponent } from '../../shared/abstract/common-page-component.abstract';

@Component({
  selector: 'app-landing-thank-you',
  templateUrl: './landing-thank-you.component.html',
  styleUrls: ['./landing-thank-you.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'col'
  }
})
export class LandingThankYouComponent extends CommonPageComponent {

}
