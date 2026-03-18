import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  login(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
    this.currentUserSubject.next(userData);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}