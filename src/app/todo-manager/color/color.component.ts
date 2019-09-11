import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"]
})
export class ColorComponent implements OnInit {
  @Output("outColor") colorChange = new EventEmitter<string>();
  public colors: string[] = [];

  constructor() {}

  ngOnInit() {
    this.colors = [
      "red",
      "blue",
      "black",
      "#cc66ff",
      "#33ccff",
      "#33cc33",
      "#ffcc00",
      "#9F39CE",
      "#E8784B",
      "#4BE859"
    ];
  }
  //nhan gia tri color tu html
  outColor(color) {
    this.colorChange.emit(color);
    //console.log(this.colorChange);
  }
}
