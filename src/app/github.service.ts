import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubUrl = "https://api.github.com"
  username: string;
  repo: string;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    const url = `${this.githubUrl}/users/${this.username}`
    return this.http.get<User>(url, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }

  getRepos(): Observable<any> {
    return this.http.get<any>(`${this.githubUrl}/users/${this.username}/repos`, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }

  searchrepos(): Observable<any> {
    return this.http.get<any>(`${this.githubUrl}/search/repositories?q=${this.repo}`, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }

  setUserName(username: string): void {
    this.username = username;
  }

  setRepo(repo: string): void {
    this.repo = repo;
  }
 }
