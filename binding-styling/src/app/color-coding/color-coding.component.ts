import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-coding',
  templateUrl: './color-coding.component.html',
  styleUrls: ['./color-coding.component.css']
})
export class ColorCodingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getColor(color) {
    switch (color) {
      case "Violet":
        return "Purple";
         case "Indigo":
        return "Indigo";
         case "Blue":
        return "Blue";
         case "Green":
        return "Green";
         case "Yellow":
        return "Yellow";
         case "Orange":
        return "Orange";
        case "Red":
        return "Red";
    }
  }

  rainbow: any[] = [
    {
      color: "Violet"
    },
    {
      color: "Indigo"
    },
    {
      color: "Blue"
    },
    {
      color: "Green"
    },
    {
      color: "Yellow"
    },
    {
      color: "Orange"
    },
    {
      color: "Red"
    },
  ]

}