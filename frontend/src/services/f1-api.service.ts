// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// // import * as F1 from 'f1-api-node';
// import F1 from 'f1-api-node';


// @Injectable({
//   providedIn: 'root'
// })
// export class F1Service {
//   private f1;

//   constructor(private http: HttpClient) {
//     this.f1 = new F1.F1(); // Adjusted this line to correctly instantiate
//   }

//   getDriverStandings(): Observable<any> {
//     return new Observable(observer => {
//       this.f1.getDriverStandings().then((data: any) => {
//         observer.next(data);
//         observer.complete();
//       }).catch((error: any) => {
//         observer.error(error);
//       });
//     });
//   }
// }
