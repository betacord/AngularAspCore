import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LayoutService {

  sideBarSource$ = new Subject<boolean>();
  
  showSideBar() {
    this.sideBarSource$.next(true);
  }

  hideSideBar() {
    this.sideBarSource$.next(false);
  }

}
