import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GroupComponent } from './component/group/group.component';
import { HomeComponent } from './component/home/home.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { LoginComponent } from './component/login/login.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ProjectComponent } from './component/project/project.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingComponent } from './component/setting/setting.component';
import { TaskParentComponent } from './task-parent/task-parent.component';


const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'task-parent', component: TaskParentComponent},
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: 'profil', component: ProfilComponent},
{path: 'setting', component: SettingComponent},
{path: 'home', component: HomeComponent},
{path:'groups', component: GroupComponent},
{path:'projects', component: ProjectComponent},
{path:'', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }