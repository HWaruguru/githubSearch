import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubUrl = "https://api.github.com"

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    const url = `${this.githubUrl}/users/${username}`
    return this.http.get<any>(url)
  }

  getRepos(username: string): Observable<any> {
    return this.http.get<any>(`${this.githubUrl}/users/${username}/repos`)
  }
}
