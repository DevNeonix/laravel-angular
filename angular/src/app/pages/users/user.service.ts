import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>('/api/users')
  }
}
