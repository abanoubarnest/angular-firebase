
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { dashboardRoutes, RouteInfo } from '../../dashboard.routes';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menuList: RouteInfo[] = dashboardRoutes
  constructor() {
  }
  ngOnInit(): void {
  }
}

