import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/models/Libro';
import { User } from 'src/app/models/User';
import { LibroService } from 'src/app/services/libro.service';
import { UserService } from 'src/app/services/user.service';

import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  $libros?: Observable<Libro[]>;
  libros: Libro[] = [];
  librosFiltered: Libro[] = [];
  user: Observable<User | undefined>;
  constructor(
    private libroService: LibroService,
    userService: UserService,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {
    this.user = userService.getUser();
  }
  ngOnInit(): void {
    this.$libros = this.libroService.getAllLibros();
    this.syncLibros();
  }
  syncLibros(): void {
    this.$libros?.subscribe((res) => {
      this.libros = res;
      this.librosFiltered = res;
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
  comprarLibro(libroId: string): void {
    this.libroService.comprarLibro(libroId).subscribe(
      (res) => {
        if (res) {
          this.translateService
            .get('BUY.SUCCESS')
            .subscribe((res) => this.toastr.success(res));
          this.syncLibros();
        } else
          this.translateService
            .get('BUY.ERROR')
            .subscribe((res) => this.toastr.error(res));
      },
      (err) => {
        this.translateService
          .get('BUY.ERROR')
          .subscribe((res) => this.toastr.error(res));
      }
    );
  }
  alquilarLibro(libroId: string, diasRenta: number): void {
    this.libroService.alquilarLibro(libroId, diasRenta).subscribe(
      (res) => {
        if (res) {
          this.translateService
            .get('RENT.SUCCESS')
            .subscribe((res) => this.toastr.success(res));
          this.syncLibros();
        } else
          this.translateService
            .get('RENT.ERROR')
            .subscribe((res) => this.toastr.error(res));
      },
      (err) => {
        this.translateService
          .get('RENT.ERROR')
          .subscribe((res) => this.toastr.error(res));
      }
    );
  }
}
