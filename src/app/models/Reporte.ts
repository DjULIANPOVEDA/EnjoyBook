export interface Reporte {
  cantidadLibros: {
    cantidadDisponible: number;
    cantidadRentado: number;
    cantidadVendido: number;
  };
  valorVentaLibros: {
    economico: number;
    promedio: number;
    costoso: number;
  };
  valorAlquilerLibros: {
    economicoA: number;
    promedioA: number;
    costosoA: number;
  };
  numeroPaginas: {
    pocasPag: number;
    promedioPag: number;
    muchasPag: number;
  };
}
