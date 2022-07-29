import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-customer-registration-form',
  templateUrl: './customer-registration-form.component.html',
  styleUrls: ['./customer-registration-form.component.css'],
})
export class CustomerRegistrationFormComponent implements
 OnInit , AfterContentInit , AfterViewInit {
  constructor() {}
  
 
  isLoaded = false;


  statesList = [
    {
      Id: 1,
      Name: 'Karnataka',
    },
    {
      Id: 2,
      Name: 'Andhrapradesh',
    },
    {
      Id: 3,
      Name: 'TamilNadu',
    },
  ];

  //Routers concepts
  ngOnInit(): void {
    //console.log("compoennt" , this.vEmail?.nativeElement.value)
    let name = this.vEmail?.nativeElement.value as string;
    if(name.indexOf("@gmail.com") == -1){
      this.EmailId = this.EmailId + "@gmail.com";
    }
  }



  @ViewChild('email') vEmail:ElementRef<any> | undefined;
  @ViewChild('password') vPassword:ElementRef<any> | undefined;
  @ViewChild('address') vAddress:ElementRef<any> | undefined;
  @ViewChild('secondAddress') vSecondAddress:ElementRef<any> | undefined;
  @ViewChild('state') vState:ElementRef<any> | undefined;
  @ViewChild('city') vCity:ElementRef<any> | undefined;
  @ViewChild('zipcode') vZipcode:ElementRef<any> | undefined;


  //defaultValue = "Angular"

 
  EmailId = "madan.patakoata";


 // with the help of the viewchild(email portion
 //) i want to display the value based on the
  // ngAfterViewInit()
  ngAfterViewInit(): void {
    let name = this.vEmail?.nativeElement.value as string;
    if(name.indexOf("@gmail.com") == -1){
      this.EmailId = this.EmailId + "@gmail.com";
    }
  }
  



  // 1.ngOnChanges     =    1
  // 2.ngOninit        =     2
  // 3. contentrelated  =    3
  // 4. viewchildrelated  =   4


  //KA

  @ContentChild('txtComments') cComments:ElementRef<any> |undefined;
  @ContentChild('DOBPlace') cDOBPlace :ElementRef<any> |undefined;


  shortKeyDOBPlace = "";
  //i can control or i can take everythinf of the contentchild related data...
  // contnet intlization after
  ngAfterContentInit(): void {
    if(this.cDOBPlace?.nativeElement.value == "Karnataka"){
      this.shortKeyDOBPlace = "KA";
    }
  }


  // whatever i am receing the content data i need the control
  sEmail = "";
  sPassword ="";
  sAddress = "";
  sSecondAddress = "";
  sCity = "";
  sZipCode = "";
  sState = "";
  sComments = "";
  CustomerForm = {};
  receivedFeedbackInfo:any = {};
  isSubmitted:boolean = false;

  Submit(){
    this.sEmail  = this.vEmail?.nativeElement.value;
    this.sPassword  = this.vPassword?.nativeElement.value;
    this.sAddress  = this.vAddress?.nativeElement.value;
    this.sSecondAddress = this.vSecondAddress?.nativeElement.value;
    this.sState= this.vState?.nativeElement.value;
    this.sCity  = this.vCity?.nativeElement.value;
    this.sZipCode  = this.vZipcode?.nativeElement.value;
    this.sComments = this.cComments?.nativeElement.value;


    this.CustomerForm = {
       'Email' : this.sEmail,
       'Password' : this.sPassword,
       'Address' : this.sAddress,
       'SecondAddress' : this.sSecondAddress,
       'State' : this.sState,
       'City' : this.sCity,
       'ZipCode' : this.sZipCode,
       'Comments' : this.sComments
    }
    this.isSubmitted = true;
  }


  
  receivedFeedbackData(info:any){
    console.log(info);
    this.receivedFeedbackInfo = info;
  }

  // i have provided bootstrap urls...   50% pass 
  //core basics of angular
  //elementref , viewcontainerref , templateref
  //contentchild , viewchild
  //ngonchanges  , ngafterviewinit , ngaftercontent init
  //input and output
  //ngif , ngfor , ngstyle , ngclass
  //ng-container , ng-template , ngcontent
  //github branches
  //eventbinding,propertydatabinding
  //localref , ngmodel , ngmodelChange , htmlinputelement
  //twoway databinding
  //eventemitter - emit 
  //output ($event)

  //monday ---- > services -- 2 or 3 days
   




  

  @ViewChild('container' ,
   { read : ViewContainerRef}) 
  container:ViewContainerRef|undefined;


  @ViewChild('temp1')
  temp1 !: TemplateRef<any>;


  evtPushtTemplate(){
      this.container?.
      createEmbeddedView(this.temp1);
  }






}
