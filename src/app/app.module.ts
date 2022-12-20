import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';


import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,DxTextBoxModule,
} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FeatherModule } from 'angular-feather';
import { LogOut } from 'angular-feather/icons';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BtResUserDetailviewComponent } from './component/bt-res-user-detailview/bt-res-user-detailview.component';
import { BtResUserListviewComponent } from './component/bt-res-user-listview/bt-res-user-listview.component';


import {  FormsModule } from '@angular/forms';
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
