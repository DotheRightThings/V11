import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  @Input() documents;

  ngOnInit(): void {
  }

}
