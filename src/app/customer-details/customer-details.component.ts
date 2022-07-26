import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Customer  } from '../Models/customer.model'; 
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
  
  
  
  
  
  //@Input('registrionFormData') _customerForm:any;
  
  @Input('registrionFormData') _customerForm:any;
  @Input('registrionFormData') set  InputCustomerForm(value:any){
    if(value.Email == null || value.Email == ""){
      value.Email = "No Email";
    }
    if(value.Address == null || value.Address == ""){
      value.Address = "No Address";
    }
    this._customerForm = value
  }
  



  @Output('evtFeedbackInformation') Information = new EventEmitter<any>();




  //this.feedbackInformation.emit(this.feedbackInformation);

  //event emitter its akind of injection
  // 1. output decarator name and your object shoudl be sync
  // 2. how you have to give the feedbackinformation object
  // to the output decarator value

  ICForm: Customer | undefined ;
  FeedbackInformation = { "EmailFeedback" : "" , "Addreess" : "" , "Password":""};

  ICForms:any[] = [];
  constructor() { }
  //
  

  //

  ngOnChanges(changes: SimpleChanges): void {
    this.ICForm = this._customerForm;
    //this.ICForm.
    //this.ICForm.
    this.ICForms.push(this.ICForm);
    //it contains the data
    console.log(this.ICForm);
  }
  // Human -- > human life cycle ---> 10-20 , 20-30
  
  // Component -- >  life cycle ---> ngOninit , ngONchanges


  //Life cycle hook
  ngOnInit(): void {
    console.log("From customer details compoennt " ,  this._test);
  }

  evtFeedBack(){
    if(this.ICForm?.Email == "" ){
      this.FeedbackInformation.EmailFeedback = "Email is not available";
    }
    else{
      this.FeedbackInformation.EmailFeedback = "Email is available";
    }

   this.Information.emit(this.FeedbackInformation);
  }

}
