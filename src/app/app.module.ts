import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
