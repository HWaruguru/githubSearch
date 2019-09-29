import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubUrl = "https://api.github.com"
  username: string;

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    const url = `${this.githubUrl}/users/${this.username}`
    return this.http.get<any>(url, ({
      headers: new HttpHeaders({Authorization: "token 8475f4676b7857ba59acf1e48e64f52d753b9ec5"})
    }))
  }

  getRepos(): Observable<any> {
    return this.http.get<any>(`${this.githubUrl}/users/${this.username}/repos`, ({
      headers: new HttpHeaders({Authorization: "token 8475f4676b7857ba59acf1e48e64f52d753b9ec5"})
    }))
  }

  setUserName(username: string): void {
    this.username = username;
  }
 }
