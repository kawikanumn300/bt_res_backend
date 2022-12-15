import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainmenuComponent } from './component/mainmenu/mainmenu.component';
import { FeatherModule } from 'angular-feather';
import { LogOut } from 'angular-feather/icons';

const icons = {

  LogOut
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainmenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    FeatherModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
