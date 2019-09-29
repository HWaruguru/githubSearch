import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  username = "hwaruguru"
  repos: any;

  constructor(private githubService: GithubService) { }

  search(): void {
    this.githubService.setUserName(this.username);
    
    this.githubService.getUser().subscribe({
      next: user => this.user = user
    })

    this.githubService.getRepos().subscribe({
      next: repos => this.repos = repos
    })
  }

  ngOnInit(): void {
    this.search()
  }

}
