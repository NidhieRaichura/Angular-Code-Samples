import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
 constructor() { }

  ngOnInit() {
  }
//#region Interpolation & Property Binding
  firstName: string = "Tom";
  lastName: string = "Reid";

  imagepath = "assets/images/logos/angular/logo-nav@2x.png";
  image = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  isDisabled: boolean = false;

  badHtml : string = 'Hello <script> alert("Hacked");</script> World';

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
//#endregion

//#region Class Binding
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass : boolean = true;
  applyItalicsClass : boolean = false;

  //For ngClass
  addClasses(){
    let classes = {
      // contains an object that has key val pair
      // add or remove bold class
      boldClass : this.applyBoldClass,
      italicsClass : this.applyItalicsClass
    };
    return classes;
  }
//#endregion

//#region Style Binding
  isBold: boolean = true;
  fontSize : number = 10;
  isItalic : boolean = true;

  addStyles(){
     // contains an object that has key val pair
    let styles = {
      'font-size.px' : this.fontSize,
      'font-style' : this.isItalic ? 'italic' : 'normal',
      'font-weight' : this.isBold?'bold':'normal',
    };
    return styles;
  }
//#endregion

//#region Event Binding
  onClick(): void{
  console.log("Button clicked");
  } 
//#endregion

//#region Two Way Data Binding
  name : string  = 'Nidhie';
//#endregion
}