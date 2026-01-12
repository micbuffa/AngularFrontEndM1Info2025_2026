import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  
  logIn() {
    this.loggedIn = true;
  }
  
  logOut() {
    this.loggedIn = false;
  }

  // méthode qui sera utilisee pour savoir si l'utilisateur est admin
  // appelée par le guard (le "gardien des routes").
  // il s'attend à une promesse qui résout un boolean
  isAdmin() {
    let isAdminPromesse = new Promise<boolean>((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return isAdminPromesse;
  }
}
