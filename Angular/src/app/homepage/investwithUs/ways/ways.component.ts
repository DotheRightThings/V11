import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ways',
  templateUrl: './ways.component.html',
  styleUrls: ['./ways.component.css']
})
export class WaysComponent implements OnInit {
  @Input() ways;
  ngOnInit() { }
}
