import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {

  constructor() { }

  @Input() returns;
  @Input() dates;

  ngOnInit(): void {
  }

}
