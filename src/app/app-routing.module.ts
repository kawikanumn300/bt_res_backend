import { BtResFoodListviewComponent } from './component/bt-res-food-listview/bt-res-food-listview.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/main/login/login.component';
import { MainmenuComponent } from './component/main/mainmenu/mainmenu.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { BtResUserDetailviewComponent } from './component/bt-res-user-detailview/bt-res-user-detailview.component';
import { BtResUserListviewComponent } from './component/bt-res-user-listview/bt-res-user-listview.component';
import { BtResNameListComponent } from './component/bt-res-name-listview/bt-res-name-list.component';
import { BtResNameDetailviewComponent } from './component/bt-res-name-detailview/bt-res-name-detailview.component';
import { BtResFoodDetailviewComponent } from './component/bt-res-food-detailview/bt-res-food-detailview.component';
import { BTRESUSERBILLComponent } from './component/bt-res-user-bill/bt-res-user-bill.component';
import { BtResUserPayEditComponent } from './component/bt-res-user-pay-edit/bt-res-user-pay-edit.component';
import { BtResOrderDayComponent } from './component/bt-res-order-day/bt-res-order-day.component';
import { ImgPayPopupComponent } from './assete/img-pay-popup/img-pay-popup.component';



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
    path: 'food-list',
    component: BtResFoodListviewComponent
  },
  {
    path: 'food-detail',
    component: BtResFoodDetailviewComponent
  },
  {
    path: 'bt-user-bill',
    component: BTRESUSERBILLComponent
  },
  {
    path: 'bt-pay-edit',
    component: BtResUserPayEditComponent
  },
  {
    path:'bt-order-day',
    component: BtResOrderDayComponent
  },
  {
    path:'img-pay-popup',
    component:ImgPayPopupComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
