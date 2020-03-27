import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  imageURL: string;
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }

  ngOnInit(): void { }


  fileData: File = null;
  previewUrl: any = null;


  onFileUpload(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  fileData2: File = null;
  previewUrl2: any = null;

  onFileUpload2(fileInput: any) {
    this.fileData2 = <File>fileInput.target.files[0];
    this.preview2();
  }

  preview2() {
    // Show preview 
    var mimeType = this.fileData2.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData2);
    reader.onload = (_event) => {
      this.previewUrl2 = reader.result;
    }
  }

  // Submit Form
  submit() {
    console.log(this.uploadForm.value)
  }

}