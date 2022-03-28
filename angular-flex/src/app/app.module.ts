import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexComponent } from './flex/flex.component';
@NgModule({
  declarations: [
    AppComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
