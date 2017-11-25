import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './core-module/sidebar/sidebar.component';
import { UserInfoComponent } from './user-info/user-info/user-info.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { LayoutService } from './shared-module/services/layout.service';
import { AuthGuard } from './auth/auth.guard';
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserInfoComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    LoginRoutingModule
  ],
  providers: [AuthService, LayoutService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
