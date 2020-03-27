import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topfunds',
  templateUrl: './topfunds.component.html',
  styleUrls: ['./topfunds.component.css']
})
export class TopfundsComponent {
  @Input() fund;
}
