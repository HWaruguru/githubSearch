import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: any[];
  repo: string;

  constructor(private githubService: GithubService) { }

  searchRepos(): void {
    this.githubService.setRepo(this.repo);
    
    this.githubService.searchrepos().subscribe({
      next: repos => this.repos = repos.items
    })
  }

  ngOnInit() {
  }

}
