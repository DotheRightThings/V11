import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }

  @Input() sections;
  @Input() datas;

  ngOnInit(): void {
  }

}
