import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ButtonGenericComponent } from './components/button-generic/button-generic.component';



@NgModule({
  declarations: [
    InputSearchComponent,
    InputComponent,
    ButtonGenericComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    InputSearchComponent,
    InputComponent,
    ButtonGenericComponent
  ]
})
export class SharedModule { }
