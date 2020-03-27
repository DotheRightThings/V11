import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor() { }

  @Input() disclaimers;

  ngOnInit(): void {
  }

}
