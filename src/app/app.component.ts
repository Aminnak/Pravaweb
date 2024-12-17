import { Component, OnInit } from '@angular/core';
import { RouterOutlet , RouterModule ,Router , NavigationEnd} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    currentRoute : string = '';

    constructor(private router : Router){}

    ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.currentRoute = this.router.url
        })
    }
}
