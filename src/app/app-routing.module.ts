
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BtResUserDetailviewComponent } from './component/bt-res-user-detailview/bt-res-user-detailview.component';
import { BtResUserListviewComponent } from './component/bt-res-user-listview/bt-res-user-listview.component';
import { BtResUserEditComponent } from './component/bt-res-user-edit/bt-res-user-edit.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path:"navbar",
    component:NavbarComponent
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
  {
    path: 'user-detailview',
    component:BtResUserDetailviewComponent
  },
  {
    path: 'app-bt-res-user-edit',
    component:BtResUserEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
