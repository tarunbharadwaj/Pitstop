import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverStandingsComponent } from './driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './constructor-standings/constructor-standings.component';
import { RaceScheduleComponent } from './race-schedule/race-schedule.component';

const routes: Routes = [
  { 
    path: 'current-driver-standings', 
    component: DriverStandingsComponent 
  },
  { 
    path: 'current-constructor-standings', 
    component: ConstructorStandingsComponent 
  },
  { 
    path: 'race-schedule', 
    component: RaceScheduleComponent
  },
  { 
    path: '', 
    redirectTo: '/current-driver-standings',  // Default route 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
