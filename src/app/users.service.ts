import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(public http: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.http
      .get(
        `https://api.github.com/users/${username}`
      )
      .pipe(
        map((response: Response) => {
          try {
            console.log(response);

            return response;
          } catch (error) {
            console.error(error);
          }
        })
      );
  }
}
