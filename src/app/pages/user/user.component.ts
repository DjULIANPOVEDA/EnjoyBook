import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/Libro';
import { User } from 'src/app/models/User';
import { LibroService } from 'src/app/services/libro.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User | undefined;
  libros: Libro[] = [];
  librosRentados: Libro[] = [];
  librosVendidos: Libro[] = [];
  librosVenta: Libro[] = [];
  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      if (!user) this.router.navigate(['/']);
    });

    this.libroService.getLibrosByUser().subscribe((libros: Libro[]) => {
      this.librosRentados = libros.filter((libro) => libro.estaRentado);
      this.librosVendidos = libros.filter((libro) => libro.estaVendido);
      this.librosVenta = libros.filter(
        (libro) => !libro.estaVendido && !libro.estaRentado
      );
    });
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private libroService: LibroService
  ) {}
}
