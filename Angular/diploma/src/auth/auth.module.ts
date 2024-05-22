import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteamComponent } from './steam/steam.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SteamComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports:[
    SteamComponent
  ]
})
export class AuthModule { }
