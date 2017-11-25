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
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './auth/admin.guard';


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
    AdminModule,
    AppRoutingModule,
    LoginRoutingModule
  ],
  providers: [AuthService, LayoutService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
