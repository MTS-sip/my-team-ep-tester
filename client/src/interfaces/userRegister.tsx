export interface UserRegister {
  id: string
  name: string | null;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}