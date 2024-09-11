import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  usersService = inject(UsersService);
  userName = input.required<string>();
  // private destroyRef = inject(DestroyRef);
  // private activatedRoute = inject(ActivatedRoute);
  // userId= input.required<string>()
  // userName = computed(()=> this.userService.users.find(u => u.id === this.userId() )?.name)
  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName =
  //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
  //           ?.name || '';
  //       console.log(this.userName);
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};
export const resolveTitle: ResolveFn<string> = (
  ActivatedRoute,
  routerState
) => {
  return resolveUserName(ActivatedRoute,routerState) + "'s Tasks";
};
