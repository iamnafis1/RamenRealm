import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService); // Inject UserService
  const router = inject(Router); // Inject Router

  if (userService.currentUser?.token) {
    return true; // Allow navigation if user has a token
  }

  // Redirect to login page if user is not authenticated
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
