import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
<<<<<<< HEAD
import { BtResUserListviewComponent } from './bt-res-user-listview/bt-res-user-listview.component';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
=======
import { FeatherModule } from 'angular-feather';
import { LogOut } from 'angular-feather/icons';

const icons = {

  LogOut
};
>>>>>>> fb49d7a4e65ad84431f9cd5d8bbc81d16a9b7d58

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    BtResUserListviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
<<<<<<< HEAD
    DxDataGridModule,
    DxBulletModule,
  DxTemplateModule,
  HttpClientModule
=======
    FeatherModule.pick(icons)
>>>>>>> fb49d7a4e65ad84431f9cd5d8bbc81d16a9b7d58
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
