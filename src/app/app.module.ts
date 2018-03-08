import { DataServiceService } from './data-service.service';
import { YashComponent } from './yash/yash.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JosephComponent } from './joseph/joseph.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UcasePipe } from './ucase.pipe';

const appRoutes: Routes = [
  {
    path: '', component: ToDoListComponent
  },
  {
    path: 'yash', component: YashComponent,
    children: [
      {
        path: 'someComponent',
        component: JosephComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    JosephComponent,
    ToDoListComponent,
    YashComponent,
    UcasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
