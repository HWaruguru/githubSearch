import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Github Search';
  nav_url: string;
  nav_text: string;


  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.nav_url = e.url === '/user' ? '/repos' : '/user'
        this.nav_text = e.url === '/user' ? 'repositories' : 'users'
      }
    })
  }
}
