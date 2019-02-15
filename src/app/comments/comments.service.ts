import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httClient: HttpClient) { }

  getListComments(){
    // let headers = this.createRequestHeader();
    let httpParams = new HttpParams().set('Authorization', 'auth-token');
    return this.httClient.get<Comment[]>(this.API_URL + '/comments', {params: httpParams});
  }

  private createRequestHeader() {
      // set headers here e.g.
      let headers = new HttpHeaders({
          "AuthKey": "my-key",
          "Authorization": "auth-token",
          "Content-Type": "application/json",
          "User-Agent:": "Baeldung Client",
          // "Time-Zone": "Europe/Amsterdam"
      });

      return headers;
  }
}
