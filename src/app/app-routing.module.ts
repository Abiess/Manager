import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GroupComponent } from './component/group/group.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfilComponent } from './component/profil/profil.component';
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
{path: '', component: HomeComponent},
{path:'group', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }