import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposTableComponent } from './components/equipos-table/equipos-table.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
//import { AngularFireModule } from '@angular/fire/compat';
//import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,    
    EquiposTableComponent,
    JugadoresComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
   // AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
