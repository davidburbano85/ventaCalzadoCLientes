import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbeyComponent } from './components/arbey/arbey.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { LilianaComponent } from './components/liliana/liliana.component';

@NgModule({
  declarations: [
    AppComponent,
    ArbeyComponent,
    NavbarComponent,
    BodyComponent,
    LilianaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
