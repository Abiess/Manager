import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GroupComponent } from './component/group/group.component';
import { HomeComponent } from './component/home/home.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { LoginComponent } from './component/login/login.component';
import { DocDialogComponent } from './component/MyTasks/doc-dialog/doc-dialog.component';
import { DocsComponent } from './component/MyTasks/docs/docs.component';
import { VerfallsdatumComponent } from './component/MyTasks/verfallsdatum/verfallsdatum.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ProjectComponent } from './component/project/project.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingComponent } from './component/setting/setting.component';
import { TestComponent } from './component/test/test.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { ResponsiveHelperComponent } from './shared/responsive-helper/responsive-helper.component';
import { TaskParentComponent } from './task-parent/task-parent.component';


const routes: Routes = [
{path: 'login', component: LoginComponent, },
{path: 'register', component: RegisterComponent},
{path: 'task-parent', component: TaskParentComponent, canActivate: [AuthGuardService] },
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: 'profil', component: ProfilComponent, canActivate: [AuthGuardService] },
{path: 'setting', component: SettingComponent, canActivate: [AuthGuardService] },
{path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
{path:'groups', component: GroupComponent, canActivate: [AuthGuardService] },
{path:'projects', component: ProjectComponent, canActivate: [AuthGuardService] },
{path:'', component: LandingPageComponent, canActivate: [AuthGuardService]},
{path:'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
{path:'test', component: TestComponent, canActivate: [AuthGuardService] },
{path:'docs', component: DocsComponent, canActivate: [AuthGuardService] },
{path:'experationdate', component: VerfallsdatumComponent, canActivate: [AuthGuardService] },
{path:'einkaufen', component: ProductListComponent, canActivate: [AuthGuardService] },
{path:'test1', component: ResponsiveHelperComponent},
{path:'addDoc', component: DocDialogComponent, canActivate: [AuthGuardService] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }