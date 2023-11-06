import { User } from './User';

export interface Libro {
  id?: string;
  nombre: string;
  autor: string;
  editor: string;
  npag: number;
  estado: string;
  estaVendido: boolean;
  estaRentado: boolean;
  precioVenta: number;
  precioRentaDia: number;
}
export interface LibroWithUser extends Libro {
  usuario: User;
}
