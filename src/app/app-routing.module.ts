import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home', component: HomeComponent}, 
  {path:'aboutus', component: AboutusComponent},
  {path:'teachers', component: TeachersComponent},
  {path:'students', component: StudentsComponent },
  {path:'achievements', component: AchievementsComponent},
  {path:'signup', component: SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 