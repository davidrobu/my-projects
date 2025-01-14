import { Routes } from "@angular/router";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes: Routes=[
    
        {
          path: '',
          redirectTo: 'tasks',
          pathMatch: 'full',
        },
        {
          path: 'tasks',
          component: TasksComponent,
          runGuardsAndResolvers: 'always',
          resolve:{
            UserTasks: resolveUserTasks
          }
        },
        {
          path: 'tasks/new',
          component: NewTaskComponent,
        }
      
]