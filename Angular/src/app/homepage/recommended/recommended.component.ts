import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent {
  @Input() rec_funds;
  @Input() periods;
  @Input() risks;
}
