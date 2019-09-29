import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Github Search';
  nav_url = '/repos';
  nav_text = 'repositories';


  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        if(e.url === '/user') {
          this.nav_url = '/repos'
          this.nav_text = 'repositories'
        } else if (e.url === '/repos') {
          this.nav_url = '/user'
          this.nav_text = 'users'
        }
      }
    })
  }
}
