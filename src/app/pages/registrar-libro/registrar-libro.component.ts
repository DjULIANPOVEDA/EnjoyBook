import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LibroService } from 'src/app/services/libro.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html',
  styleUrls: ['./registrar-libro.component.css'],
})
export class RegistrarLibroComponent implements OnInit {
  isLoading: boolean = false;
  registrarLibroForm: FormGroup;
  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      autor: ['', Validators.required],
      editor: ['', Validators.required],
      npag: ['', Validators.required],
      estado: ['', Validators.required],
      precioVenta: ['', Validators.required],
      precioRentaDia: ['', Validators.required],
    });
  }
  message?: { isSuccess: boolean; message: string } = undefined;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private libroService: LibroService,
    private router: Router
  ) {
    this.registrarLibroForm = this.initForm();
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (!user) this.router.navigate(['/']);
    });
  }
  onSubmit(): void {
    this.message = undefined;
    this.registrarLibroForm.markAllAsTouched();
    if (!this.registrarLibroForm.valid) return;
    this.isLoading = true;
    this.libroService.registrarLibro(this.registrarLibroForm.value).subscribe(
      (res) => {
        if (res) {
          this.message = {
            isSuccess: true,
            message: 'SUCCESS',
          };
        } else {
          this.message = {
            isSuccess: true,
            message: 'FAILEND',
          };
        }
        this.isLoading = false;
      },
      (err) => {
        this.message = {
          isSuccess: true,
          message: 'FAILEND',
        };
        this.isLoading = false;
      }
    );
  }
}
