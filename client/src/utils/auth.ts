import { jwtDecode } from 'jwt-decode';
import type { UserLogin } from '../interfaces/userLogin.tsx';

interface JwtPayload {
  exp?: number; // Define expiration time property
}

class AuthService {
  getProfile() {
    return jwtDecode<UserLogin>(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      return decoded?.exp && decoded.exp < Date.now() / 1000;
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
