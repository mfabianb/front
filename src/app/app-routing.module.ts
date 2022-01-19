import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import all components */
import { LoginComponent } from './ui/components/login/login.component';

/* Dashboard component */
import { DashboardComponent } from './ui/components/dashboard/dashboard.component';
import { ClassroomListComponent } from './ui/components/dashboard/classroom-list/classroom-list.component';

/* Teacher */
import { TeacherComponent } from './ui/components/dashboard/teacher/teacher.component';
import { ClassroomCreateComponent } from './ui/components/dashboard/teacher/classroom-create/classroom-create.component';

/* Student */
import { StudentComponent } from './ui/components/dashboard/student/student.component';
import { ClassroomSuscribeComponent } from './ui/components/dashboard/student/classroom-suscribe/classroom-suscribe.component';

/* Admin */
import { AdminComponent } from './ui/components/dashboard/admin/admin.component';

/* Dialogs */
import { ClassroomCreateSuccessComponent } from './ui/dialogs/classroom-create-success/classroom-create-success.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: ClassroomListComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
