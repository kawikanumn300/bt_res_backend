import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxSelectBoxModule,
  DxValidationSummaryModule,
  DxValidatorModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';


import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxFormModule,
  DxTooltipModule
} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FeatherModule } from 'angular-feather';
import { LogOut } from 'angular-feather/icons';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BtResUserListviewComponent } from './component/bt-res-user-listview/bt-res-user-listview.component';
import { BtResUserDetailviewComponent } from './component/bt-res-user-detailview/bt-res-user-detailview.component';


import {  FormsModule } from '@angular/forms';
import { BtResUserEditComponent } from './component/bt-res-user-edit/bt-res-user-edit.component';
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
