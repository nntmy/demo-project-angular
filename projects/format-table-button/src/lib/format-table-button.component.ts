import { Component, OnInit, Input, Renderer2, ElementRef } from "@angular/core";

@Component({
  selector: "lib-format-table-button",
  template: `
    <button class="button" [style.background-color]="bgColor" >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .button {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
          0 0 0 0 rgba(0, 0, 0, 0.12);

          background-color:#673ab7;
        border-radius: 4px;
        line-height: 36px;
        padding: 0 16px;
        min-width: 64px;
        display: inline-block;
        -webkit-tap-highlight-color: transparent;
        border: none;
        box-sizing: border-box;
        position: relative;
      }
    `
  ]
})
export class FormatTableButtonComponent implements OnInit {
  @Input() textColor: string = "#FFFFFF";
  //colorDefault:string= "#3976CE";
  //@Input() brRadiur: string = "inherit";
  @Input('bgColor') bgColor: string ;
  //private colorBut:string = " CE398C";

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    console.log('bgcolor',this.bgColor);
    //this.colorDefault=this.bgColor;
    // const but = this.renderer.createElement("button");
    // const text = this.renderer.createText("Hello world!");

    // this.renderer.appendChild(but, text);
    // this.renderer.appendChild(this.el.nativeElement, but);
    this.renderer.setStyle(
      this.el.nativeElement.firstElementChild,
      "color",
      this.textColor
    );
    this.renderer.setStyle(
      this.el.nativeElement.firstElementChild,
      "backgroundColor",
      this.bgColor
    );
    // this.renderer.setStyle(
    //   this.el.nativeElement.firstElementChild,
    //   "border-radius",
    //   this.brRadiur
    // );
  }

 
  //nhan mau tu todo
  // setMyStyles() {
  //   //console.log('set my style');
  //   let styles = {
  //     'background-color': this.bgColor

  //   };
  //   return styles;
  // }
}
