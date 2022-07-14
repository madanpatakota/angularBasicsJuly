import { Component } from '@angular/core';



// <span></span>

@Component({
  selector: 'app-root-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// component is html + ts + css
// Q) what is the component ts file?
// A : A simple class where i can develop the business logic
//     business logic nothing but code


// Q) hwo you are bind   | sync
// the your busines logic
// to the html


// string interpolation
// property data binding
// string data binding
// event data binidng


//event or function or method--> 


 export class AppComponent {
  title = 'angularBasicsJuly';  // code...

  Name  = "AngularBatch";   

  CustomerId = 1234;

  controlValue = "radio";

  //method
  getLocationName(){
    return "Bangolore"
  }

  alert(){
      window.alert("Clicked");
  }

  showLog(){
    let a=1;
    let b =2;
    let c = a+b;
    console.log(c);
  }




  
  


}
