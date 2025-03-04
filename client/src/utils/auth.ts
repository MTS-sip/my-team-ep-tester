import { jwtDecode } from 'jwt-decode';

// Define the JWT payload type
interface JwtPayload {
  exp?: number;
  id?: string;
  email?: string;
}

// Function to decode a JWT token
export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwtDecode<JwtPayload>(token); // ✅ Ensure correct typing
  } catch (error) {
    console.error("Invalid JWT token:", error);
    return null;
  }
};

// Function to check if a JWT token is expired
export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) return true; // Assume expired if no expiration field
  return decoded.exp * 1000 < Date.now(); // Convert exp from seconds to milliseconds
};

// Function to store token in localStorage
export const storeToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

// Function to retrieve token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem('authToken');
};

// Function to remove token (logout)
export const removeToken = (): void => {
  localStorage.removeItem('authToken');
};

// Function to check if a user is authenticated
export const isAuthenticated = (): boolean => {
  const token = getToken();
  return token !== null && !isTokenExpired(token);
};

// Function to get the current logged-in user
export const getCurrentUser = (): JwtPayload | null => {
  const token = getToken();
  return token ? decodeToken(token) : null;
};