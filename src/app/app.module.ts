import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KonamiCodeService } from './konami-code.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [KonamiCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
