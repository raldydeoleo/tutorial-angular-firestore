import { Component, OnInit } from '@angular/core';
//import { JugadorService } from 'src/app/services/jugador.service';




@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  public cats = [];
  public jugadores = [];

  constructor() { }

  ngOnInit() {
  /*  this.jugadorService.getJugadores().subscribe((jugadoresSnapshot) => {
      this.cats = [];
      jugadoresSnapshot.forEach((jugadorData: any) => {
        this.jugadores.push({
          id: jugadorData.payload.doc.id,
          data: jugadorData.payload.doc.data()
        });
      })
    });
  }*/
  }
}
