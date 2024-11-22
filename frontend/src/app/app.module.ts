import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DriverStatsComponent } from './driver-stats/driver-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LoaderComponent,
    DriverStandingsComponent,
    ConstructorStandingsComponent,
    HeaderComponent,
    FooterComponent,
    RaceScheduleComponent,
    DriverStatsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [HttpService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
