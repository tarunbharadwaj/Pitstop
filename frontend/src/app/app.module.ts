import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriversComponent } from './drivers/drivers.component';
import { NewsComponent } from './news/news.component';
import { LoaderComponent } from './loader/loader.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DriverStandingsComponent } from './driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './constructor-standings/constructor-standings.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RaceScheduleComponent } from './race-schedule/race-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    NewsComponent,
    LoaderComponent,
    DriverStandingsComponent,
    ConstructorStandingsComponent,
    HeaderComponent,
    FooterComponent,
    RaceScheduleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [HttpService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
