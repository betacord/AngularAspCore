import { NgModule } from "@angular/core";
import { UserInfoComponent } from "./user-info/user-info/user-info.component";
import { RouterModule, Route } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { AdminComponent } from "./admin/admin/admin.component";
import { AdminGuard } from "./auth/admin.guard";

const APP_ROUTES: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [AuthGuard]},
    {path: "home", component: UserInfoComponent, canActivate: [AuthGuard]},
    {path: "admin", component: AdminComponent, canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({

    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {


}