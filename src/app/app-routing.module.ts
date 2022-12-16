import { BtResUserListviewComponent } from './bt-res-user-listview/bt-res-user-listview.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/user-listview",
    pathMatch: "full"
  },
  {
    path: 'mainmenu',
    component: MainmenuComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-listview',
    component: BtResUserListviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
