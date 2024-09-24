import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-race-schedule',
  templateUrl: './race-schedule.component.html',
  styleUrl: './race-schedule.component.scss'
})
export class RaceScheduleComponent implements OnInit {
  selectedYear: any;
  years: number[] = [];
  apiResponse: any;

  isLoading: boolean = false;
  errorMessage: any;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1950; i--) {
      this.years.push(i);
    }
  }


  submitYear() {
    this.isLoading = true; // Show loader
    this.errorMessage = ''; // Reset error message
    let apiEndpoint = `${environment.apiUrl}/anySeasonRaceSchedule`;
    const payload = { 
      year: this.selectedYear 
    };

    // Set a timeout to display error message if request takes longer than 1 minute
    const timeout = setTimeout(() => {
      this.errorMessage = 'Oops! Not Able to Fetch Data, take a Nap and try after some time'; // Display error message
      this.isLoading = false; // Hide loader
    }, 60000); // 1 minute

    this.http.post(apiEndpoint, payload).subscribe(
      (res: any) => {
        clearTimeout(timeout); // Clear the timeout if the request succeeds
        this.apiResponse = res.data;
        this.isLoading = false; // Hide loader once data is received
        // console.log("Checking POST apiResponse>>> ", this.apiResponse);
      },
      (error) => {
        clearTimeout(timeout); // Clear the timeout if an error occurs
        // console.error('Error fetching data:', error);
        this.errorMessage = 'Oops! Some error occurred'; // Display error message
        this.isLoading = false; // Hide loader even if there's an error
      }
    );
  }



}
