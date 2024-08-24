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

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1950; i--) {
      this.years.push(i);
    }
  }


  submitYear() {
    this.isLoading = true; // Show loader
    let apiEndpoint = `${environment.apiUrl}/anySeasonRaceSchedule`;
    const payload = { 
      year: this.selectedYear 
    };
    this.http.post(apiEndpoint, payload).subscribe(
      (res: any) => {
        this.isLoading = false; // Hide loader once data is received
        this.apiResponse = res.data;
        // console.log("Checking POST apiResponse>>> ", this.apiResponse);
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false; // Hide loader even if there's an error
      }
    );
  }



}
