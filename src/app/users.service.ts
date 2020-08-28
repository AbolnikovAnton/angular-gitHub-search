import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(username): Observable<any> {
    return this.http
      .get(`https://api.github.com/users/${username}`)
      .pipe(map((response: Response) => response.json()));
  }
}
