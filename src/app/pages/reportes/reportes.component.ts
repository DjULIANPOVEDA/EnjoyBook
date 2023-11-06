import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reporte } from 'src/app/models/Reporte';
import { User } from 'src/app/models/User';
import { LibroService } from 'src/app/services/libro.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent implements OnInit {
  data: any;
  options: any;

  user: Observable<User | undefined>;
  reporte?: Reporte;
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
    this.libroService.reporte().subscribe((reporte) => {
      this.reporte = reporte;
      console.log(reporte);
    });
  }
}
