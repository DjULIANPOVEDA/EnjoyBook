export interface User {
  id: string;
  rol: string;
  username: string;
  telefono: string;
  correo: string;
  direccion: string;
  token: string;
}
export interface UserAuth {
  userName: string;
  password: string;
}
