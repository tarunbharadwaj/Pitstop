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
    // let apiEndpoint = `${this.apiUrl}/currentdriverstandings`;
    let apiEndpoint = `${environment.apiUrl}/currentdriverstandings`;
    this.http.get(apiEndpoint).subscribe(
      (res: any) => {
        /* this.latestResults = res.data.standings.map((item: any) => ({
          position: item.position,
          driver: `${item.driver.firstName} ${item.driver.lastName}`,
          constructor: item.constructors[0].name,
          points: item.points,
        }));
        console.log('latestResults>>>>>', this.latestResults); */
        this.currentStandingList = res.data.standings;
        this.isLoading = false; // Hide loader once data is received
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false; // Hide loader even if there's an error
      }
    );
  }

  
}