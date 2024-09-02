import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { interval, Subscription } from 'rxjs';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrl: './driver-standings.component.scss'
})
export class DriverStandingsComponent implements OnInit {

  currentStandingList: any = [];
  isLoading: boolean = true;
  errorMessage: any;

  // apiUrl = 'http://localhost:3000'

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.currentStandingsList();
  }

  
  /**
   * To Fetch current drivers standings List
   */
  currentStandingsList() {
    this.isLoading = true; // Show loader
    this.errorMessage = ''; // Reset error message
    let apiEndpoint = `${environment.apiUrl}/currentdriverstandings`;

    // Set a timeout to display error message if request takes longer than 1 minute
    const timeout = setTimeout(() => {
      this.errorMessage = 'Oops! Not Able to Fetch Data, take a Nap and try after some time'; // Display error message
      this.isLoading = false; // Hide loader
    }, 60000); // 1 minute

    this.http.get(apiEndpoint).subscribe(
      (res: any) => {
        /* this.latestResults = res.data.standings.map((item: any) => ({
          position: item.position,
          driver: `${item.driver.firstName} ${item.driver.lastName}`,
          constructor: item.constructors[0].name,
          points: item.points,
        }));
        console.log('latestResults>>>>>', this.latestResults); */
        clearTimeout(timeout); // Clear the timeout if the request succeeds
        this.currentStandingList = res.data.standings;
        this.isLoading = false; // Hide loader once data is received
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