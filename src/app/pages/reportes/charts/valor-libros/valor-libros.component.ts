import { Component, Input } from '@angular/core';
import { Reporte } from 'src/app/models/Reporte';

@Component({
  selector: 'app-valor-libros',
  templateUrl: './valor-libros.component.html',
  styleUrls: ['./valor-libros.component.css'],
})
export class ValorLibrosComponent {
  @Input() reporte?: Reporte;
  data: any;
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
      labels: ['0-10.000', '10.001-100.000', '100.001+'],
      datasets: [
        {
          data: [
            this.reporte?.valorVentaLibros.economico ?? 0,
            this.reporte?.valorVentaLibros.promedio ?? 0,
            this.reporte?.valorVentaLibros.costoso ?? 0,
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
