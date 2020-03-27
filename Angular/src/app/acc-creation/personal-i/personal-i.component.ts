import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-personal-i',
  templateUrl: './personal-i.component.html',
  styleUrls: ['./personal-i.component.css']
})
export class PersonalIComponent implements OnInit {

  constructor(private userdataservice: UserDataService, private fb: FormBuilder) { 
  }

  personal_i_Form: FormGroup;

  ngOnInit(): void {
    this.personal_i_Form = this.fb.group({
      FATCA: [''],
      CRS: [''],
      account: this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        con_password: ['', [Validators.required]],
        sec_ques: [''],
        sec_ans: ['']
      },{validator: this.passwordConfirming}),
      personal: this.fb.group({
        salutation: [''],
        fullname: [''],
        ic_num: [''],
        dob: [''],
        cob: [''],
        nationality: [''],
        bumi_ptr: [''],
        race: [''],
        gender: [''],
        mari_status: ['']
      }),
      p_address: this.fb.group({
        addline_1: [''],
        addline_2: [''],
        poscode: [''],
        town: [''],
        state: [''],
        country: [''],
        sameAdd: [''],
      }),
      c_address: this.fb.group({
        c_addline_1: [''],
        c_addline_2: [''],
        c_poscode: [''],
        c_town: [''],
        c_state: [''],
        c_country: [''],
      }),
      contact: this.fb.group({
        email: [''],
        m_cc: [''],
        m_num: [''],
        h_cc: [''],
        h_num: [''],
        o_cc: [''],
        o_num: [''],
        ext: [''],
      }),
    });
  }


  passwordConfirming(c: AbstractControl): { invalid: boolean }{
    if (c.get('password').value !== c.get('con_password').value) {
      return { invalid: true };
    }
  }

  get username() {
    return this.personal_i_Form.get('account').get('username');
  }

  get password() {
    return this.personal_i_Form.get('account').get('password');
  }

  get con_password() {
    return this.personal_i_Form.get('account').get('con_password');
  }

  onSubmit() {
    this.userdataservice.setOption(this.personal_i_Form.value);
  }


  h2 = "Your account opening application is subject to RHBAM's approval. You will be notified upon successful processing."

  stages = [
    { 'name': 'Upload Your ID' },
    { 'name': 'Personal Information' },
    { 'name': 'Other Information' },
    { 'name': 'Review' },
  ]

  head_list = [
    { 'name': 'FATCA Declaration', 'detail': 'I hereby confirm I understand my FATCA requirement. I hereby declare that I am* :' },
    { 'name': 'Common Reporting Standard', 'detail': 'I hereby confirm I understand my tax residency/CRS requirement. I hereby declare that I am* :' },
  ]

  list_1 = [
    { 'type': 'Non-US individual with no US indicia' },
    { 'type': 'Non-US individual with US indicia' },
    { 'type': 'US individual' },
  ]

  list_2 = [
    { 'type': 'Tax resident in Malaysia and do not have any foreign tax residency and/or foreign indicia.' },
    { 'type': 'Tax resident of other country(ies).' },
  ]

  account_i = [
    { 'name': 'Username* :' },
    { 'name': 'Password* :' },
    { 'name': 'Confirm Password* :' },
    { 'name': 'Security Question* :' },
  ]

  security_q = [
    { 'question': 'What was the make of your first mobile phone?' },
    { 'question': 'What was the name of your first pet?' },
    { 'question': 'What is your favourite car brand?' },
    { 'question': 'What is your favourite color?' },
    { 'question': 'What is your favourite sauce for steak?' },
  ]

  personal_i = [
    { 'name': 'Salutation* :' },
    { 'name': 'Full Name (as per NRIC/Passport)* :' },
    { 'name': 'NRIC Number/Passport (non Malaysian citizen)* :' },
    { 'name': 'Date of Birth* :' },
    { 'name': 'Country of Birth* :' },
    { 'name': 'Nationality* :' },
    { 'name': 'Bumiputera Status* :' },
    { 'name': 'Race* :' },
    { 'name': 'Gender* :' },
    { 'name': 'Marital Status* :' }
  ]

  address_i = [
    { 'name': 'Address Line 1* :' },
    { 'name': 'Address Line 2 :' },
    { 'name': 'Address Line 3 :' },
    { 'name': 'Postal Code* :' },
    { 'name': 'Town/City* :' },
    { 'name': 'State* :' },
    { 'name': 'Country* :' },
    { 'name': 'Is your correspondence address same as your permanent address?* :' },
  ]

  contact_i = [
    { 'name': 'Email Address* :' },
    { 'name': 'Mobile Number* :' },
    { 'name': 'Residence/House Number :' },
    { 'name': 'Office Number :' }
  ]

  salutations = [
    { 'salutes': 'Mr' },
    { 'salutes': 'Mrs' },
    { 'salutes': 'Ms' }
  ]

  countries = [
    { 'country': 'Malaysia' },
    { 'country': 'China' },
    { 'country': 'Italy' },
    { 'country': 'Spain' }
  ]

  nationalities = [
    { 'nationality': 'Malaysia' },
    { 'nationality': 'China' },
    { 'nationality': 'Italy' },
    { 'nationality': 'Spain' }
  ]

  races = [
    { 'race': 'Malay' },
    { 'race': 'Chinese' },
    { 'race': 'India' },
    { 'race': 'Others' },
  ]

  mar_status = [
    { 'status': 'Single' },
    { 'status': 'Married' },
    { 'status': 'Divorced' },
    { 'status': 'Widowed' },
  ]

  states = [
    { 'state': 'WILAYAH PERSEKUTUAN KUALA LUMPUR' },
    { 'state': 'WILAYAH PERSEKUTUAN PUTRAJAYA' },
    { 'state': 'WILAYAH PERSEKUTUAN LABUAN' },
    { 'state': 'NEGERI SEMBILAN' },
    { 'state': 'SELANGOR' },
    { 'state': 'MELAKA' },
    { 'state': 'JOHOR' },
    { 'state': 'PAHANG' },
    { 'state': 'PERAK' },
    { 'state': 'KEDAH' },
    { 'state': 'PERLIS' },
    { 'state': 'PENANG' },
    { 'state': 'KELANTAN' },
    { 'state': 'TERENGGANU' },
    { 'state': 'SABAH' },
    { 'state': 'SARAWAK' }
  ]

  countries_C = [
    { 'country': 'MALAYSIA' },
    { 'country': 'CHINA' },
    { 'country': 'ITALY' },
    { 'country': 'SPAIN' }
  ]

  country_codes = [
    { 'code': '+60' },
    { 'code': '+86' },
    { 'code': '+39' },
    { 'code': '+34' }
  ]
}
