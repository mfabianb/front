import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular material
import {MatButtonModule} from '@angular/material/button';

/* Conexiones a internet */
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaludoComponent } from './ui/saludo/saludo/saludo.component';
import { LoginComponent } from './app/login/login/login.component';
import { DashboardComponent } from './ui/components/dashboard/dashboard.component';
import { TeacherComponent } from './ui/components/dashboard/teacher/teacher.component';
import { StudentComponent } from './ui/components/dashboard/student/student.component';
import { AdminComponent } from './ui/components/dashboard/admin/admin.component';
import { ClassroomListComponent } from './ui/components/dashboard/classroom-list/classroom-list.component';
import { ClassroomCreateComponent } from './ui/components/dashboard/teacher/classroom-create/classroom-create.component';
import { ClassroomCreateSuccessComponent } from './ui/dialogs/classroom-create-success/classroom-create-success.component';
import { ClassroomSuscribeComponent } from './ui/components/dashboard/student/classroom-suscribe/classroom-suscribe.component';
import { BoardViewComponent } from './ui/components/dashboard/board/board-view/board-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    LoginComponent,
    DashboardComponent,
    TeacherComponent,
    StudentComponent,
    AdminComponent,
    ClassroomListComponent,
    ClassroomCreateComponent,
    ClassroomCreateSuccessComponent,
    ClassroomSuscribeComponent,
    BoardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
