import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationEventsService {

  private navigationStartEventName = 'view-changed';
  private navigationDataReadyEventName = 'datalayer-ready';
  private navigationEndEventName = 'view-ready';
  private navigationErrorEventName = 'view-error';

  constructor() { }

  onRouteChanged(detail: any = {}) {
    this.dispatchDocumentNavigationEvent(
      this.navigationStartEventName,
      detail
    );
  }

  onModelReady(detail: any = {}) {
    this.dispatchDocumentNavigationEvent(
      this.navigationDataReadyEventName,
      detail
    );
  }

  onViewReady(detail: any = {}) {
    this.dispatchDocumentNavigationEvent(
      this.navigationEndEventName,
      detail
    );
  }

  onViewError(detail: any = {}) {
    this.dispatchDocumentNavigationEvent(
      this.navigationErrorEventName,
      detail
    );
  }

  private dispatchDocumentNavigationEvent(
    eventName: string,
    eventInitialization: CustomEvent<any>
  ) {
    const customEvent = new CustomEvent(eventName, eventInitialization);
    document.dispatchEvent(customEvent);
  }

}
