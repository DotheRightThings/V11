import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {

  constructor() { }

  @Input() risks;
  @Input() update2;
  ngOnInit(): void {
  }

}
