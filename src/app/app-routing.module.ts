import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CreateCourseComponent} from './create-course/create-course.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';
import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {ImportantToKnowComponent} from './ImportantToKnow/important-to-know.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "about",
        component: AboutComponent
    },
    {
    path: 'register',
    component: CreateCourseComponent
  },
  {
    path: "drag-drop-example",
    component: DragDropComponent
  },
  {
    path: "recommendation",
    component: TreeDemoComponent
  },
  {
    path: 'important-to-know',
    component: ImportantToKnowComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

    {
        path: "**",
        redirectTo: '/'
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
