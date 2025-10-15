import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Mail {
  private url="http://localhost:5674/sendmail"
   constructor(private http:HttpClient){}
   postmail(data:any):Observable<any>{
    return  this.http.post(this.url,data)


   }
}
