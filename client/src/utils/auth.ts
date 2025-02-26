// import { jwt_decode.jwtDecode } from 'jwt-decode';
// import * as jwt_decode from 'jwt-decode';
import type { UserLogin } from '../interfaces/userLogin.tsx';

interface JwtPayload {
  exp?: number; // Define expiration time property
}

class AuthService {
  getProfile() {
    // return jwt_decode.jwtDecode<UserLogin>(this.getToken());
    return null;
  }

  loggedIn() {
    // const token = this.getToken();
    // return !!token && !this.isTokenExpired(token);
    return null;
  }

  isTokenExpired(token: string) {
    try {
       // const decoded: JwtPayload = jwt_decode.jwtDecode(token);
      // return decoded?.exp && decoded.exp < Date.now() / 1000;
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