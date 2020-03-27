import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investwithUs',
  templateUrl: './investwithUs.component.html',
  styleUrls: ['./investwithUs.component.css']
})
export class InvestwithUsComponent {
  @Input() ways;
}
