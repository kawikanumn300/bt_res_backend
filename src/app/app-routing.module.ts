import { BtResFoodDetailviewComponent } from './component/bt-res-food-detailview/bt-res-food-detailview.component';
import { BtResFoodListviewComponent } from './component/bt-res-food-listview/bt-res-food-listview.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/main/login/login.component';
import { MainmenuComponent } from './component/main/mainmenu/mainmenu.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { BtResUserDetailviewComponent } from './component/bt-res-user-detailview/bt-res-user-detailview.component';
import { BtResUserListviewComponent } from './component/bt-res-user-listview/bt-res-user-listview.component';
import { BtResUserEditComponent } from './component/bt-res-user-edit/bt-res-user-edit.component';
import { BtResNameListComponent } from './component/bt-res-name-listview/bt-res-name-list.component';
import { BtResNameDetailviewComponent } from './component/bt-res-name-detailview/bt-res-name-detailview.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "resname-list",
    component: BtResNameListComponent
  },
  {
    path: "resname-detailview",
    component: BtResNameDetailviewComponent
  },
  {
    path: "navbar",
    component: NavbarComponent
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
    component: BtResUserDetailviewComponent
  },
  {
    path: 'user-edit',
    component: BtResUserEditComponent
  }, {
    path: 'food-list',
    component: BtResFoodListviewComponent
  }, {
    path: 'food-detail',
    component: BtResFoodDetailviewComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
