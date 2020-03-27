import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  values = '';

  onKey(event: any) {
    this.values = event.target.value;
  }

  @Input() periods;
  @Input() risks;

  ngOnInit() { }
}
