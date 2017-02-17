import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  template: `
        <li>
          <a routerLink={{link}} routerLinkActive="active" title={{label}}>
              <span class="title nav-label">{{label}}</span>
          </a>
      	</li>
  `
})
export class NavlinkComponent implements OnInit {
  @Input() private label: string;
  @Input('href') private link: string;
  @Input() private icon: string;

  constructor() { }

  ngOnInit() {
  }

}
