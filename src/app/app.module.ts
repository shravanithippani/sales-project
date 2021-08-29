import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalePersonListComponent } from './sale-person-list/sale-person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalePersonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
