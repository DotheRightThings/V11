import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acc-creation',
  templateUrl: './acc-creation.component.html',
  styleUrls: ['./acc-creation.component.css']
})
export class AccCreationComponent implements OnInit {

  constructor() { }

  h2 = "Your account opening application is subject to RHBAM's approval. You will be notified upon successful processing."

  stages = [
    { 'name': 'Upload Your ID' },
    { 'name': 'Personal Information' },
    { 'name': 'Other Information' },
    { 'name': 'Review' },
  ]


  ngOnInit(): void {
  }

}
