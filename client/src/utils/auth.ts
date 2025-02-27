// Path: client/src/utils/auth.ts
import { jwtDecode } from "jwt-decode";
import type { UserLogin } from "../interfaces/userLogin.tsx";

interface JwtPayload {
  exp?: number; // Define expiration time property
  id?: string;
  email?: string;
}

class AuthService {
  // ✅ Get user profile from token
  getProfile(): JwtPayload | null {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  // ✅ Check if user is logged in
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // ✅ Check if JWT token is expired
  isTokenExpired(token: string): boolean {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      return decoded?.exp ? decoded.exp < Date.now() / 1000 : false;
    } catch (err) {
      return false;
    }
  }

  // ✅ Retrieve token from localStorage
  getToken(): string {
    return localStorage.getItem("id_token") || "";
  }

  // ✅ Store JWT token and redirect
  login(idToken: string): void {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  // ✅ Remove token and logout
  logout(): void {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();


/*
// import { jwtDecode.jwtDecode } from 'jwt-decode';
//import * as jwtdecode from 'jwt-decode';
import type { UserLogin } from '../interfaces/userLogin.tsx';

interface JwtPayload {
  exp?: number; // Define expiration time property
}

class AuthService {
  getProfile() {
  // return jwtDecode<UserLogin>(this.getToken());
  return null;
  }

  loggedIn() {
   //const token = this.getToken();
  //return !!token && !this.isTokenExpired(token);
  return null;
  }

  isTokenExpired(token: string) {
    try {
      //const decoded: JwtPayload = jwtDecode(token);
      //return decoded?.exp && decoded.exp < Date.now() / 1000;
      return null;
    } catch (err) {
      return false;
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
*/ 
