import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  latestNewsData: any = [];
  isLoading: boolean = true;
  errorMessage: any;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getLatestNews();
  }

  getLatestNews() {
    this.isLoading = true; // Show loader
    this.errorMessage = '';
    let apiEndpoint = `${environment.apiUrl}/latestnews`;

    // Set a timeout to display error message if request takes longer than 1 minute
    const timeout = setTimeout(() => {
      this.errorMessage =
        'Oops! Not Able to Fetch Data, take a Nap and try after some time';
      this.isLoading = false;
    }, 60000); // 1 minute

    this.http.get(apiEndpoint).subscribe(
      (res: any) => {
        clearTimeout(timeout);
        this.latestNewsData = res.data;

        this.isLoading = false;
      },
      (error) => {
        clearTimeout(timeout);
        this.errorMessage = 'Oops! Some error occurred'; // Display error message
        this.isLoading = false; // Hide loader even if there's an error
      }
    );
  }
}
