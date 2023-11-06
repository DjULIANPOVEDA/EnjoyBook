import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LibroWithUser } from 'src/app/models/Libro';
import { User } from 'src/app/models/User';
import { LibroService } from 'src/app/services/libro.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  user: Observable<User | undefined>;
  libros: LibroWithUser[] = [];
  librosFiltered: LibroWithUser[] = [];
  constructor(
    userService: UserService,
    private router: Router,
    private libroService: LibroService
  ) {
    this.user = userService.getUser();
  }
  ngOnInit(): void {
    this.user.subscribe((user) => {
      if (!user) this.router.navigate(['/']);
      else if (user.rol != 'Admin') this.router.navigate(['/']);
    });
    this.libroService.getInventarioLibros().subscribe((libros) => {
      this.libros = libros;
      this.librosFiltered = libros;
    });
  }

  filterList(): void {
    const search: string = this.inputSearch.nativeElement.value;
    this.librosFiltered = this.libros.filter(
      (l) =>
        l.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        l.autor.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        l.editor.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
