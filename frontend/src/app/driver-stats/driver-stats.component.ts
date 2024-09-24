import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HttpService } from '../../services/http.service';
import { environment } from '../../environments/environment';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-driver-stats',
  templateUrl: './driver-stats.component.html',
  styleUrl: './driver-stats.component.scss'
})
export class DriverStatsComponent implements OnInit {
  public chart: any;
  // isLoading: boolean = true;
  // errorMessage: any;

  constructor(private http: HttpService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.fetchDriverWins();
  }

  // Function to fetch driver wins data and create chart
  fetchDriverWins() {
    let apiEndpoint = `${environment.apiUrl}/driverstats`;
    
    this.http.get(apiEndpoint).subscribe(
      (res: any) => {
      const standings = res.data.standings;

      // Map driver full names and their wins
      const driverNames = standings.map(
        (m: any) => `${m.driver.firstName} ${m.driver.lastName}`
      );
      const driverWins = standings.map(
        (m: any) => m.wins
      );

      this.createChart(driverNames, driverWins);
    });
  }

  // Function to create chart
  createChart(labels: string[], data: number[]) {
    this.chart = new Chart('driverWinsChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Number of Wins',
            data: data,
            backgroundColor: '#00ffdd',
            borderColor: '#00ffdd',
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y', // Make it horizontal
        responsive: true,
        maintainAspectRatio: false, // Allows more control over height
        scales: {
          x: {
            beginAtZero: true
          },
        },
        plugins: {
          // Plugin to display data labels
          datalabels: {
            anchor: 'center', // Position the label at the end of the bar
            color: 'black', // Label color
            font: {
              weight: 'bold',
              size: 15
            },
            formatter: function(value) {
              return value; // Display the value
            }
          }
        }
      },
      plugins: [ChartDataLabels] // Enable the ChartDataLabels plugin
    });
  }


}
