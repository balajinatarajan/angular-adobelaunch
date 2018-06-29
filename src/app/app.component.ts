import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { NavigationEventsService } from './shared/services/navigation-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private navigationEvents: NavigationEventsService,
  ) { }

  ngOnInit() {
    this.routerEventsHandler();
  }

  private routerEventsHandler() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        console.info('Navigation starts');
        this.navigationEvents.onRouteChanged();
      }
    });
  }
}
