import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topfund',
  templateUrl: './topfund.component.html',
  styleUrls: ['./topfund.component.css']
})
export class TopfundComponent implements OnInit {

  constructor() { }

  @Input() funds;
  @Input() update;

  ngOnInit(): void {
  }


}
