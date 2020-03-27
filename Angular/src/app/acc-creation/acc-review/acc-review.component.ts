import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-acc-review',
  templateUrl: './acc-review.component.html',
  styleUrls: ['./acc-review.component.css']
})
export class AccReviewComponent implements OnInit {

  public data=[];

  constructor(private userdataservice: UserDataService) {
    this.data = userdataservice.getOption();
    console.log("qwe",this.data);

  }

  h2 = "Your account opening application is subject to RHBAM's approval. You will be notified upon successful processing."

  stages = [
    { 'name': 'Upload Your ID' },
    { 'name': 'Personal Information' },
    { 'name': 'Other Information' },
    { 'name': 'Review' },
  ]

  section_list = [
    { 'section': 'Account Information' },
    { 'section': 'Personal Information' },
    { 'section': 'Permanent Address' },
    { 'section': 'Correspondence Address' },
    { 'section': 'Contact Information' },
    { 'section': 'Occupation Information' },
    { 'section': 'Servicing Agent' }
  ]

  head_1 = [
    { 'name': 'FATCA Declaration', 'detail': 'I hereby confirm I understand my FATCA requirement. I hereby declare that I am* :', 'data': 'Non-US individual with no US indicia' },
    { 'name': 'Common Reporting Standard', 'detail': 'I hereby confirm I understand my tax residency/CRS requirement. I hereby declare that I am* :', 'data': 'Tax resident in Malaysia and do not have any foreign tax residency and/or foreign indicia.' },
  ]

  detail_1 = [
    { 'name': 'Username* :', 'data': 'thi' },
    { 'name': 'Password* :', 'data': 'y' },
    { 'name': 'Security Question* :', 'data': 'What was the make of your first mobile phone?Motorola' },
  ]

  detail_2 = [
    { 'name': 'Salutation* :', 'data': 'Mr' },
    { 'name': 'Full Name (as per NRIC/Passport)* :', 'data': 'wernsheng' },
    { 'name': 'NRIC Number/Passport (non Malaysian citizen)* :', 'data': '940512065234' },
    { 'name': 'Date of Birth* :', 'data': '13 December 1988' },
    { 'name': 'Country of Birth* :', 'data': 'Malaysia' },
    { 'name': 'Nationality* :', 'data': 'Malaysia' },
    { 'name': 'Bumiputera Status* :', 'data': 'No' },
    { 'name': 'Race* :', 'data': 'Chinese' },
    { 'name': 'Gender* :', 'data': 'Male' },
    { 'name': 'Marital Status* :', 'data': 'Single' },
  ]

  detail_3 = [
    { 'name': 'Address* :', 'data': 'Level 22, iFast Service Centre Sdn Bhd, 30 Jalan Sultan Ismail' },
    { 'name': 'Postal Code* :', 'data': '50250' },
    { 'name': 'Town/City* :', 'data': 'Kuala Lumpur' },
    { 'name': 'State* :', 'data': 'WILAYAH PERSEKUTUAN KUALA LUMPUR' },
    { 'name': 'Country* :', 'data': 'Malaysia' },
    { 'name': 'Is your correspondence address same as your permanent address?* :', 'data': 'No' },
  ]

  detail_4 = [
    { 'name': 'Address* :', 'data': 'Level 28, iFast Capital, 30 Jalan Sultan Ismail' },
    { 'name': 'Postal Code* :', 'data': '50250' },
    { 'name': 'Town/City* :', 'data': 'Kuala Lumpur' },
    { 'name': 'State* :', 'data': 'WILAYAH PERSEKUTUAN KUALA LUMPUR' },
    { 'name': 'Country* :', 'data': 'Malaysia' },
  ]

  detail_5 = [
    { 'name': 'Email Address* :', 'data': 'wernsheng@gmail.com' },
    { 'name': 'Mobile Number* :', 'data': '+60169434494' },
    { 'name': 'Residence/House Number :', 'data': '+60139567794' },
    { 'name': 'Office Number :', 'data': '+60199934786 (Ext:8392)' },
  ]

  detail_6 = [
    { 'name': 'Source of Income* :', 'data': 'Employment (Permanent)' },
    { 'name': 'Occupation* :', 'data': 'Professional' },
    { 'name': 'Name of Employer / Business* :', 'data': 'iFast Service Centre Sdn Bhd' },
    { 'name': "Employer's / Business Office* :", 'names': "Employer", 'data': 'Within Malaysia' },
    { 'name': 'Nature of Business* :', 'data': 'Financial' },
    { 'name': 'Annual Income* :', 'data': 'Below MYR 1,000,000' },
    { 'name': 'Estimate Net Worth* :', 'data': 'Below MYR 1,000,000' }
  ]
  detail_7 = [
    { 'name': 'Do you have a preferred Agent?* :', 'data': 'Yes' },
    { 'name': 'Agent Code :', 'data': 'R053414' }
  ]
  ngOnInit(): void {
  }

}
