import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit , OnChanges {

  
  //input of the component 
  //receiving the data...
  //inputting the data...
  @Input('test') _test:any;
  @Input('registrionFormData') _customerForm:any;

  ICForm:any = {};

  constructor() { }

  //

  ngOnChanges(changes: SimpleChanges): void {
    this.ICForm = this._customerForm

    console.log(this.ICForm);
  }



  // Human -- > human life cycle ---> 10-20 , 20-30
  
  // Component -- >  life cycle ---> ngOninit , ngONchanges


  //Life cycle hook
  ngOnInit(): void {
    console.log("From customer details compoennt " ,  this._test);
   

  }

}
