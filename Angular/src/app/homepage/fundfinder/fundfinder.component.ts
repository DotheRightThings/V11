import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fundfinder',
  templateUrl: './fundfinder.component.html',
  styleUrls: ['./fundfinder.component.css']
})
export class FundfinderComponent implements OnInit {
  @Input() find_funds
  ngOnInit() { }
}
