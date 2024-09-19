export interface Jugador {
    $key?: string; //Angular necesita este campo.
    nombre: string;
    apellido: string;
    //posicion: NumeroPosicion;
    peso: number;
    altura: number;
    //nacionalidad: Paises;
    zurdo: boolean;
  }