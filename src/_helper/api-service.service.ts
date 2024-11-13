import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { catchError, map } from "rxjs/operators";
import { environment } from "../environments/environment";
import { Response } from "../_models/api-res";
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  Response: Response ;
  // private Response = new Response;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}




  CallApiService(ServiceName: string = "", ReqData: any = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        DeviceType: 1,
      }),
    };

    // ReqData.Token = UserDetails?.Token;

    return this.http
      .post(environment.apiUrl + ServiceName, ReqData, httpOptions)
      .pipe(
        map((res) => {
          this.Response = JSON.parse(JSON.stringify(res));
          console.table(this.Response);
          // if(this.Response['status']!='1'){

          if (this.Response["alert"] != "0") {
            switch (this.Response["status"]) {
              case "1":
                this.toastr.success(this.Response["message"]);
                break;
              case "2":
                this.toastr.info(this.Response["message"]);
                break;
              case "3":
                this.toastr.warning(this.Response["message"]);
                break;
              case "4":
                this.toastr.info(this.Response["message"]);

                break;
              case "5":
                this.toastr.warning(this.Response["message"]);
                break;
              default:
                this.toastr.error(this.Response["message"]);
                break;
            }
          }
          // }
          return this.Response;
        }),
        catchError(this.handleError)
      );
  }

  // AuthCallApiService(
  //   ServiceName: string = "",
  //   ReqData: any = {}
  // ): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //       DeviceType: 1,
  //     }),
  //   };
  //   ReqData.Token = environment.token;

  //   return this.http
  //     .post(environment.auth + "/" + ServiceName, ReqData, httpOptions)
  //     .pipe(
  //       map((res) => {
  //         this.Response = JSON.parse(JSON.stringify(res));
  //         // if(this.Response['status']!='1'){

  //         if (this.Response["alert"] != "0") {
  //           switch (this.Response["status"]) {
  //             case "1":
  //               this.toastr.success(this.Response["message"]);
  //               break;
  //             case "2":
  //               this.toastr.info(this.Response["message"]);
  //               break;
  //             case "3" || "5":
  //               localStorage.clear();
  //               this.router.navigate([`lockscreen`]);
  //               this.toastr.warning(this.Response["message"]);
  //               break;
  //             default:
  //               this.toastr.error(this.Response["message"]);
  //               break;
  //           }
  //         }
  //         // }
  //         return this.Response;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }

  private handleError(error: any): Observable<never> {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Backend returned code ${error.status}: ${error.body.message}`;
    }
    console.error("error", errorMessage);
    // Use the updated throwError approach
    return throwError(() => new Error(errorMessage));
  }
}
