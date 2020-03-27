import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.css'],

})
export class UploadIdComponent implements OnInit {

  constructor() { }

  @Input() h2;
  @Input() stages;

  ngOnInit(): void {
  }

}