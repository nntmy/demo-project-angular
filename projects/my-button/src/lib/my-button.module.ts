import { NgModule } from '@angular/core';
import { MyButtonComponent } from './my-button.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [MyButtonComponent, ButtonComponent],
  imports: [CommonModule
  ],
  exports: [MyButtonComponent,ButtonComponent]
})
export class MyButtonModule { }
