import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KonamiCodeService } from './konami-code.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [KonamiCodeService],
  declarations: []
})
export class KonamiCodeModule { }
