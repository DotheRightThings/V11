import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  @Input() description;
  @Input() analysis;
  @Input() annuals;
  @Input() cumulatives;
  @Input() calenders;
  @Input() historicals;

  ngOnInit(): void {
  }

}
