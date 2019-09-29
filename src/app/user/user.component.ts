import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  username = "boswellgathu"
  repos: any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getUser(this.username).subscribe({
      next: user => this.user = user
    })

    this.githubService.getRepos(this.username).subscribe({
      next: repos => this.repos = repos
    })
  }

}
