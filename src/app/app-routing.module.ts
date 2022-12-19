import { BtResUserListviewComponent } from './bt-res-user-listview/bt-res-user-listview.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BtResUserDetailviewComponent } from './bt-res-user-detailview/bt-res-user-detailview.component';



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
