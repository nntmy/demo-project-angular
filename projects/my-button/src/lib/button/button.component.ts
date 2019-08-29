import { Component, OnInit, Output, EventEmitter ,Renderer2, ElementRef  } from '@angular/core';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';

@Component({
  selector: 'lib-button',
  template: `<button [ngStyle]="setMyStyles()" >my button</button>`,
  styles: [
    `
    button{
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    `
  ]
})
export class ButtonComponent implements OnInit {

  @Output('outColor') colorConnect = new EventEmitter<string>();
  public colorDefault:string = "#4CAF50";
  renderer: Renderer2;
  element: ElementRef;
  constructor() { }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement, 'background-color', this.colorDefault);
  }
  getColor(event:string){
    this.colorDefault = event;
    //console.log('mau lay duoc '+ this.colorDefault);
  }
  //nhan mau tu todo
  setMyStyles() {
    //console.log('set my style');
    let styles = {
      'background-color': this.colorDefault
      
    };
    return styles;
  }
}
