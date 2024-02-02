import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChoixCentreComponent } from './choix-centre/choix-centre.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path: "choix_centre", component:ChoixCentreComponent},
  {path: "choix_centre/:ville", component:ChoixCentreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
