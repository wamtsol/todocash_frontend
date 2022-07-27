import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, shareReplay } from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  fullPageTemplate = false;
  dropdowns:any = {
	}

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { 
    
  }

  toggle(dropdown: string){
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }

  ngOnInit(): void {
  }

}
