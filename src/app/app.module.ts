import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './idea23/header/header.component';
import { BeneficiariosComponent } from './idea23/beneficiarios/beneficiarios.component';
import { FooterComponent } from './idea23/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeneficiariosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
