import { Component, Input } from '@angular/core';
import { Reporte } from 'src/app/models/Reporte';

@Component({
  selector: 'app-valor-alquiler-libros',
  templateUrl: './valor-alquiler-libros.component.html',
  styleUrls: ['./valor-alquiler-libros.component.css'],
})
export class ValorAlquilerLibrosComponent {
  @Input() reporte?: Reporte;
  data: any;
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
      labels: ['0-2000', '2001-10000', '10001+'],
      datasets: [
        {
          data: [
            this.reporte?.valorAlquilerLibros.economicoA ?? 0,
            this.reporte?.valorAlquilerLibros.promedioA ?? 0,
            this.reporte?.valorAlquilerLibros.costosoA ?? 0,
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
