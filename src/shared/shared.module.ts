import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from "ng2-charts";
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
