import { Component } from '@angular/core';

@Component({
  selector: 'app-fundfactsheet',
  templateUrl: './fundfactsheet.component.html',
  styleUrls: ['./fundfactsheet.component.css']
})
export class FundfactsheetComponent {

  documents = [
    { "prefix": "P", "term": "Prospectus" },
    { "prefix": "AR", "term": "Semi-annual/Annual Report" },
    { "prefix": "PH", "term": "Product Highlights Sheet" },
    { "prefix": "FF", "term": "Fund Factsheet" },
  ];

  sections = [
    { "name": "Asset Class" },
    { "name": "Fund Size (as at Jun 30, 2019)" },
    { "name": "Sector" },
    { "name": "Launch Date" },
    { "name": "Geographical Allocation" },
    { "name": "Launch Price" },
    { "name": "Approved by EPF" },
    { "name": "Pricing Basis" },
    { "name": "Shariah Compliant" },
    { "name": "Historical Income Distribution" },
  ];

  datas = [
    { "data": "Equity" },
    { "data": "MYR 15.2 million" },
    { "data": "General" },
    { "data": "Dec 2, 2015" },
    { "data": "Asia excluding Japan" },
    { "data": "MYR 1.00" },
    { "data": "No" },
    { "data": "Forward Pricing" },
    { "data": "Yes" },
    { "data": "-" },
  ];



  objective = "The Fund seeks to achieve capital appreciation in the long term through investments in Shariah-compliant equities and equity related securities. (formerly known as Aberdeen Islamic Asia Pacific Ex Japan Equity Fund - Class MYR - A Acc)"

  description = "Aberdeen Standard Islamic Asia Pacific Ex Japan Equity Fund - MYR A Acc Performance Chart over the last 3 years"
  analysis = [
    "Performance figures are absolute returns based on the price of the fund as at Aug 6, 2019 on NAV-to-NAV basis, with dividends being 'reinvested' on the dividend date. Performance figures of over 1 year are annualised. (Eg. A 33.1% gain in 3 years works out to a 10% gain per year when annualised.) Last updated on Aug 7, 2019.",
    "Performance figures are absolute returns based on the price of the fund as at Aug 6, 2019 on NAV-to-NAV basis, with dividends being 'reinvested' on the dividend date. Last updated on Aug 7, 2019.",
    "Performance figures are absolute returns based on the price of the fund as at Aug 6, 2019 on NAV-to-NAV basis, with dividends being 'reinvested' on the dividend date. Last updated on Aug 7, 2019.",
    "Figures are updated as at Feb 3, 2020. Kindly note that NAV figures above are not divided-adjusted figures."
  ]
  annuals = [
    { "time": "3M", "percentage": "6.37%", "color": "#5CD27C" },
    { "time": "6M", "percentage": "2.94%", "color": "#5CD27C" },
    { "time": "1Y", "percentage": "8.54%", "color": "#5CD27C" },
    { "time": "2Y", "percentage": "5.89%", "color": "#5CD27C" },
    { "time": "3Y", "percentage": "1.46%", "color": "#5CD27C" },
    { "time": "5Y", "percentage": "-", "color": "#777777" },
    { "time": "10Y", "percentage": "-", "color": "#777777" }
  ];

  cumulatives = [
    { "time": "1W", "percentage": "4.81%", "color": "#5CD27C" },
    { "time": "1M", "percentage": "7.90%", "color": "#5CD27C" },
    { "time": "3M", "percentage": "6.37%", "color": "#5CD27C" },
    { "time": "6M", "percentage": "2.94%", "color": "#5CD27C" },
    { "time": "YTD", "percentage": "0.53%", "color": "#5CD27C" },
    { "time": "1Y", "percentage": "8.54%", "color": "#5CD27C" },
    { "time": "3Y", "percentage": "4.33%", "color": "#5CD27C" },
    { "time": "5Y", "percentage": "-", "color": "#777777" },
    { "time": "10Y", "percentage": "-", "color": "#777777" },
    { "time": "Launch", "percentage": "0.53%", "color": "#5CD27C" }
  ];

  calenders = [
    { "year": "2018", "percentage": "-10.94%", "color": "#FF7575" },
    { "year": "2017", "percentage": "7.15%", "color": "#5CD27C" },
    { "year": "2016", "percentage": "5.34%", "color": "#5CD27C" },
    { "year": "2015", "percentage": "-", "color": "#777777" },
    { "year": "2014", "percentage": "-", "color": "#777777" }
  ];

  historicals = [
    { "period": "1Y High", "price": "MYR 1.1052" },
    { "period": "1Y Low", "price": "MYR 0.9849" },
    { "period": "3Y High", "price": "MYR 1.1704" },
    { "period": "3Y Low", "price": "MYR 0.9406" },
    { "period": "All-time High", "price": "MYR 1.1704" },
    { "period": "All-time Low", "price": "MYR 0.8875" },
  ];

  transactions = [
    { "name": "Minimum Initial Investment", "detail": "MYR 1000" },
    { "name": "Minimum Subsequent Investment", "detail": "MYR 500" },
    { "name": "Minimum RSP Investment", "detail": "MYR 100" },
    { "name": "Minimum Redemption Amount", "detail": "500 Units" },
    { "name": "Minimum Holding", "detail": "MYR 1000" },
    { "name": "Cooling-off Period (from transaction date)", "detail": "6 Business Days" },
    { "name": "Buy Processing Time", "detail": "T + 3 business days" },
    { "name": "Redemption Processing Time", "detail": "T + 6 business days" },
  ];

  policy = "Distribution of income (if any) will be reinvested in units of the relevant Fund."
  charges = [
    { "name": "Sales Charges", "detail": "1.75%" },
    { "name": "Annual Management Fee", "detail": "1.75%" },
    { "name": "Switching Fee", "detail": "Not Applicable" },
    { "name": "Redemption Fee", "detail": "-" },
    { "name": "Annual Expense Ratio", "detail": "2.31% as at 30 Jun 2018" },
    { "name": "Trustee Fee", "detail": "0.08% p.a. of NAV" },
  ];

  announcements = [
    { "name": "Malaysia Public Holiday*", "detail": "No upcoming public holiday" },
    { "name": "Fund Holiday**", "detail": "No upcoming fund holiday" },
    { "name": "Fund Related Notice", "detail": "-" },
  ];

  notices = [
    "*There will be no pricing on Malaysia Public Holidays and Fund Holidays declared by individual fund managers. Pricing of the funds will be resumed on the following business day.",
    "**The above fund holidays are based on the latest information provided by the individual fund managers. Omissions may occur in the event that RHB Investment is not informed on time."
  ]

  returns = [
    { "from": "8 Aug 2018", "until": "8 Aug 2019", "fundreturn": "0.79%" }
  ];

  dates = [
    { "name": "From Date" },
    { "name": "Until Date" },
    { "name": "Fund Returns (MYR)" }
  ];

  funds = [
    { "name": "G Opportunity Fund", "percent": 31.63 },
    { "name": "B Growth Fund", "percent": -0.70 },
    { "name": "H Sukuk Fund - USD", "percent": 31.26 },
    { "name": "F Balanced Fund - MYR", "percent": 26.72 },
    { "name": "R Asia (Ex Japan) Opportunity Fund - USD", "percent": 19.75 },
    { "name": "B Balanced Fund A Acc USD", "percent": 25.56 },
    { "name": "P Income Fund E Acc USD", "percent": 25.32 },
    { "name": "T Emerging Market Bond Fund Retail (Gross) Acc USD", "percent": 21.03 }
  ];

  update = "Last Updated: 5 Nov 2019. Figures are based on 1Y period."

  risks = [
    { "type": "3Y Annualised Volatility", "percentage": 11.53 },
    { "type": "3Y Sharpe Ratio", "percentage": -0.30 }
  ];

  update2 = "The above figures are as at Jan 31, 2020. Last updated on Feb 3, 2020."
  disclaimers = [
    { "detail": "Unit price is the NAV price, sales charges are not included." },
    { "detail": "Investment involves risk. The price of securities may go down as well as up, and under certain circumstances an investor may sustain a total or substantial loss of investment. Past performance is not necessarily indicative of the future or likely performance of the fund. Investors should read the relevant fund's prospectus for details before making any investment decision. An Investor should make an appraisal of the risks involved in investing in these products and should consult their own independent and professional advisors, to ensure that any decision made is suitable with regards to their circumstances and financial position." },
    { "detail": "Users should always wash their hands before operating any investment to avoid infection of Corona virus." },
    { "detail": "Users should always wash their hands before operating any investment to avoid infection of Corona virus." },
    { "detail": "Users should always wash their hands before operating any investment to avoid infection of Corona virus." },
    { "detail": "Users should always wash their hands before operating any investment to avoid infection of Corona virus." },
    { "detail": "Users should always wash their hands before operating any investment to avoid infection of Corona virus." }
  ];

}
