import { Component, Input, OnInit } from '@angular/core';
import { Reporte } from 'src/app/models/Reporte';

@Component({
  selector: 'app-cantidad-libros',
  templateUrl: './cantidad-libros.component.html',
  styleUrls: ['./cantidad-libros.component.css'],
})
export class CantidadLibrosComponent implements OnInit {
  @Input() reporte?: Reporte;
  data: any;
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
      labels: ['Disponible', 'Rentados', 'Vendidos'],
      datasets: [
        {
          data: [
            this.reporte?.cantidadLibros.cantidadDisponible ?? 0,
            this.reporte?.cantidadLibros.cantidadRentado ?? 0,
            this.reporte?.cantidadLibros.cantidadVendido ?? 0,
          ],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };
  }
}
