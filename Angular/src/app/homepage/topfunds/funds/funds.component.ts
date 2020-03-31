import { Component, OnInit, Input } from '@angular/core';
import { Funds } from 'src/app/models/funds';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  funds: Funds[];

  constructor(private userdataservice: UserDataService, private router: Router) { }


  ngOnInit() { 
    this.userdataservice.getFundsList().subscribe(data => {
      this.funds = data;
    });
    console.log("Backend: ",this.funds)
  }
  
}
