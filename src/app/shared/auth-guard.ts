import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  let promesse = authService.isAdmin();
  return promesse.then((authentifie) => {
    if (!authentifie) {
      // rediriger vers la page d'accueil
      console.log("Utilisateur non authentifié, redirection vers la page d'accueil");
      router.navigate(['/home']);
      return false;
    } else {
      console.log("Utilisateur authentifié, accès autorisé");
      return true;

    }
  });
};
