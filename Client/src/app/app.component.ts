import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LayoutService } from './shared-module/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  constructor(private layoutService: LayoutService) {}
  
    isSidebarVisible : boolean = false;  
  
    ngOnInit() {
      this.layoutService.sideBarSource$.subscribe((isVisible) => {
        this.isSidebarVisible = isVisible;
      });
    }
}
