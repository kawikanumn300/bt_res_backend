
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxLoadIndicatorModule,
  DxLoadPanelModule,
  DxSelectBoxModule,
  DxValidationSummaryModule,
  DxValidatorModule
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/main/login/login.component';
import { MainmenuComponent } from './component/main/mainmenu/mainmenu.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxFormModule,
  DxTooltipModule,

} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FeatherModule } from 'angular-feather';
import { LogOut } from 'angular-feather/icons';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { BtResUserListviewComponent } from './component/bt-res-user-listview/bt-res-user-listview.component';
import { BtResUserDetailviewComponent } from './component/bt-res-user-detailview/bt-res-user-detailview.component';


import { FormsModule } from '@angular/forms';
import { BtResUserEditComponent } from './component/bt-res-user-edit/bt-res-user-edit.component';
import { BtResNameListComponent } from './component/bt-res-name-listview/bt-res-name-list.component';
import { BtResNameDetailviewComponent } from './component/bt-res-name-detailview/bt-res-name-detailview.component';
import { BtResFoodListviewComponent } from './component/bt-res-food-listview/bt-res-food-listview.component';
import { BtResFoodDetailviewComponent } from './component/bt-res-food-detailview/bt-res-food-detailview.component';
const icons = {

  LogOut
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    BtResUserListviewComponent,
    NavbarComponent,
    BtResUserDetailviewComponent,
    BtResUserEditComponent,
    BtResNameListComponent,
    BtResNameDetailviewComponent,
    BtResFoodListviewComponent,
    BtResFoodDetailviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    HttpClientModule,
    FeatherModule.pick(icons),
    DxTextBoxModule,
    DxFormModule,
    DxTooltipModule,
    DxValidatorModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxValidationSummaryModule,
    FormsModule,
    DxLoadPanelModule,
    DxLoadIndicatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
