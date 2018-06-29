import { AfterViewInit, Inject, OnInit } from '@angular/core';
import { NavigationEventsService } from '../services/navigation-events.service';
import { Subject } from 'rxjs';
import { UnsubscribeComponent } from './unsubscribe-component.abstract';

export abstract class CommonPageComponent extends UnsubscribeComponent implements OnInit, AfterViewInit {

    flowname;
    pagename;

    constructor(
        @Inject(NavigationEventsService) protected navigationEvents: NavigationEventsService,
    ) {
        super();
    }

    ngOnInit() {
        //Expose offers to data layer 
        let datalayer = window["datalayer"] || {};
        //Expose Page Level Variables to data layer
        datalayer["pagename"] = this.pagename;
        datalayer["flowname"] = this.flowname;

        window["datalayer"] = datalayer;


        this.navigationEvents.onModelReady();
        console.info('datalayer-ready event is fired');
    }

    ngAfterViewInit() {
        this.navigationEvents.onViewReady();
        console.info('view-ready event is fired');
    }
}
