import { Component, Input } from '@angular/core';
import { Reporte } from 'src/app/models/Reporte';

@Component({
  selector: 'app-cantidad-pags',
  templateUrl: './cantidad-pags.component.html',
  styleUrls: ['./cantidad-pags.component.css'],
})
export class CantidadPagsComponent {
  @Input() reporte?: Reporte;
  data: any;
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
      labels: ['1-50', '51-199', '200+'],
      datasets: [
        {
          data: [
            this.reporte?.numeroPaginas.pocasPag ?? 0,
            this.reporte?.numeroPaginas.promedioPag ?? 0,
            this.reporte?.numeroPaginas.muchasPag ?? 0,
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
