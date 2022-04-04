import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';


const routes: Routes = [
  { path: '', component: AdminLayoutComponent, canActivate: [AuthGuard],

  children: [

          {

            path: "",

            loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)

          }

        ] },
  
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

// const routes: Routes = [
//   {
//     path: "",
//     redirectTo: "dashboard1",
//     pathMatch: "full"
//   },
//   {
//     path: "",
//     component: AdminLayoutComponent,
//     children: [
//       {
//         path: "",
//         loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
//       }
//     ]
//   }, 
//   {
//     path: "",
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: "",
//         loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
//       }
//     ]
//   },
//   {
//     path: "**",
//     redirectTo: "dashboard2"
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
