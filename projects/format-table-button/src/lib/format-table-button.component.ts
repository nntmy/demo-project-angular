import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-format-table-button',
  template: `
    <p>
      format-table-button works!
    </p>
  `,
  styles: [
    `
    div {
      padding: 20px;
      margin: 10px auto;
      box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);
      border-radius: 7px;
    }
    `
  ]
})
export class FormatTableButtonComponent implements OnInit {

  @Input() color: string = "rgb(42,100,250)"
  @Input() bgColor: string = "rgba(0,0,30,0.9)"
  @Input() font: string = "consolas, monospace"

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef
    ) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color)
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgroundColor', this.bgColor)
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font)
  }

}
