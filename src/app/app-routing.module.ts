import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RutineComponent } from "./rutine/rutine.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rutine', component: RutineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
