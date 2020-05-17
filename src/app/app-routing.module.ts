import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "src/guards/auth.guard";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { SelPeriodComponent } from "./components/sel-period/sel-period.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Generador de horario"
    }
  },
  {
    path: "Dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Dashboard"
    },
    children: [
      {
        path: "termdate",
        component: SelPeriodComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Selecionar Perido"
        }
      }
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", pathMatch: "full", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
