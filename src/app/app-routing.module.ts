import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EquiposTableComponent } from './components/equipos-table/equipos-table.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/policies', pathMatch: 'full'}, 
  { path: 'app', component: AppComponent },
  { path: 'equipos', component: EquiposTableComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'policies', component: PolicyListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
