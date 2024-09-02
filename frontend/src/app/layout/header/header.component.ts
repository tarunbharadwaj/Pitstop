import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { interval, Subscription } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  nextRaceDate: any = Date;
  nextRaceName: any;
  nextRaceCountry: any;
  countdown: any;
  private subscription: any = Subscription;
  private checkInterval: number = 60000; // Check every 60 seconds

  isLoading: boolean = true;
  errorMessage: any;

  // apiUrl = 'http://localhost:3000'

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.daysLeftBeforeRaceSchedule();
  }



  /*******
   * To show the timer for the upcoming race
   ******/
  daysLeftBeforeRaceSchedule() {
    this.isLoading = true; // Show loader
    this.errorMessage = ''; // Reset error message
    let apiEndpoint = `${environment.apiUrl}/raceschedule`;

    // Set a timeout to display error message if request takes longer than 1 minute
    const timeout = setTimeout(() => {
      this.errorMessage = 'Oops! Not Able to Fetch Data, take a Nap and try after some time'; // Display error message
      this.isLoading = false; // Hide loader
    }, 60000); // 1 minute

    this.http.get(apiEndpoint).subscribe(
      (res) => {
        clearTimeout(timeout); // Clear the timeout if the request succeeds
        this.findNextUpcomingRace(res.data);
        this.isLoading = false; // Hide loader once data is received
      },
      (error) => {
        clearTimeout(timeout); // Clear the timeout if the request succeeds
        this.errorMessage = 'Oops! Some error occurred'; // Display error message
        // console.error('Error fetching data:', error);
        this.isLoading = false; // Hide loader even if there's an error
      }
    );
  }

  findNextUpcomingRace(races: any[]) {
    const now = new Date().getTime();
    let closestRace = null;
    let minTimeDiff = Infinity;

    for (const race of races) {
      const raceDate = new Date(race.date).getTime();
      if (raceDate > now && raceDate - now < minTimeDiff) {
        minTimeDiff = raceDate - now;
        closestRace = race;
      }
    }

    if (closestRace) {
      this.nextRaceDate = new Date(closestRace.date);
      this.nextRaceName = closestRace.name;
      this.nextRaceCountry = closestRace.circuit.location.country;
      this.startCountdown();
    } else {
      this.countdown = 'No upcoming races';
    }
  }

  startCountdown() {
    this.subscription = interval(1000).subscribe(() => {
      const now = new Date().getTime();
      const distance = this.nextRaceDate.getTime() - now;

      if (distance < 0) {
        this.countdown = 'Race has started!';
        this.subscription.unsubscribe();
        setTimeout(() => this.daysLeftBeforeRaceSchedule(), this.checkInterval); // Check for the next race
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.countdown = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
