import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ways = [
    { "imgsrc": "https://i.imgur.com/vgi0nEG.jpg", "type": "Portfolio Simulator", "description": "We have crafted investment portfolios using our recommended funds to help you manage risk while maximising performing potentional.", "advice": "Leave it to an expert." },
    { "imgsrc": "https://i.imgur.com/F3dx8Zs.jpg", "type": "Fund Selector", "description": "Choose and compare the wide range of fund offered on our platform using our Fund Selector by selecting your preffered criteria.", "advice": "Browse our funds." },
    { "imgsrc": "https://i.imgur.com/x7CiDDS.jpg", "type": "Meet Your Advisor", "description": "Speak to us to obtain financial advice tailored to your personal goals and create a plan to secure your future.", "advice": "Talk to the expert." },
  ];

  find_funds = [
    { "name": "Search fund" },
    { "name": "RHB Google Fund" },
    { "name": "RHB Microsoft Fund" },
    { "name": "RHB Apple Fund" },
    { "name": "RHB Transformer Fund" },
    { "name": "RHB Titanic Fund" },
    { "name": "RHB London Bridge Fund" },
    { "name": "RHB Nothing to Fund" },
  ];

  rec_funds = [
    { "marketname": "RHB Asian Real Estate Fund", "price": 0.4512, "percent": "6.61" },
    { "marketname": "RHB Cash Management Fund 2", "price": 1.4135, "percent": "3.40" },
    { "marketname": "RHB Bond Fund", "price": 0.9486, "percent": "5.99" },
    { "marketname": "RHB Golden Dragon Fund", "price": 0.559, "percent": "3.58" },
  ];

  periods = [
    { "name": "1 year" },
    { "name": "2 year" },
    { "name": "3 year" },
    { "name": "4 year" },
    { "name": "5 year" },
    { "name": "6 year" },
    { "name": "7 year" },
    { "name": "8 year" },
    { "name": "9 year" },
    { "name": "10 year" },
  ];

  risks = [
    { "name": "All risk" },
    { "name": "Very low" },
    { "name": "Low" },
    { "name": "Medium" },
    { "name": "High" },
    { "name": "Very high" },
  ];

  ngOnInit(): void {
  }
}
