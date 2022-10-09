import { LilianaComponent } from './components/liliana/liliana.component';
import { BodyComponent } from './components/body/body.component';
import { ArbeyComponent } from './components/arbey/arbey.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'NavbarComponent', component:NavbarComponent}
  {path:'ArbeyComponent', component:ArbeyComponent},
  {path:'LilianaComponent', component:LilianaComponent},
  {path:'BodyComponent', component:BodyComponent},
  {path: '', redirectTo: 'BodyComponent', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
