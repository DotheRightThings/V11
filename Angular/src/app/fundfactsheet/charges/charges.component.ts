import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  constructor() { }

  @Input() charges;

  ngOnInit(): void {
  }

}
