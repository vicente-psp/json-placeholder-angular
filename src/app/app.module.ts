import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommentsComponent } from './comments/comments.component';
import { HttpClientModule } from '@angular/common/http';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
