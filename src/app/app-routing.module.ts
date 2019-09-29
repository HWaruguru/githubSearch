import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';


const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'repos', component: ReposComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
