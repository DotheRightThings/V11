import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  constructor() { }

  @Input() announcements;
  @Input() notices

  ngOnInit(): void {
  }

}
