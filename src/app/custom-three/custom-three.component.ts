import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-three',
  templateUrl: './custom-three.component.html',
  styleUrls: ['./custom-three.component.css']
})
export class CustomThreeComponent {

  Submit(CustomerName:HTMLInputElement){
    console.log(CustomerName);
    console.log(CustomerName.value);
  }


  evtSubmitLocation(
    CustomerLocatoin:HTMLElement
    ,info:HTMLElement){
      console.log(CustomerLocatoin);
      console.log(info);

      let locationType = CustomerLocatoin as HTMLInputElement;
      console.log(locationType.value);
      //console.log(CustomerName.value);
      console.log(info.innerText);


  }


  evtSubmitDesignation(){
    console.log(this.customerDesignation);

    console.log(this.customerDesignation.nativeElement.value);
  }

  Name:string = "Angular";

  Location:string = "Bangolore";

  Designation:string = "Angular Developer";


  
// <input type="text" 
// placeholder="Enter the Designation"
// [value]="Designation" 
// #CustomerDesignation/>

//i did the setup here
@ViewChild('CustomerDesignation')
           customerDesignation:any;






}
