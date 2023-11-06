import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserComponent } from './pages/user/user.component';
import { RegistrarLibroComponent } from './pages/registrar-libro/registrar-libro.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

import { ChartModule } from 'primeng/chart';
import { CantidadLibrosComponent } from './pages/reportes/charts/cantidad-libros/cantidad-libros.component';
import { ValorLibrosComponent } from './pages/reportes/charts/valor-libros/valor-libros.component';
import { ValorAlquilerLibrosComponent } from './pages/reportes/charts/valor-alquiler-libros/valor-alquiler-libros.component';
import { CantidadPagsComponent } from './pages/reportes/charts/cantidad-pags/cantidad-pags.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/language/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    RegistrarLibroComponent,
    ReportesComponent,
    InventarioComponent,
    CantidadLibrosComponent,
    ValorLibrosComponent,
    ValorAlquilerLibrosComponent,
    CantidadPagsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
