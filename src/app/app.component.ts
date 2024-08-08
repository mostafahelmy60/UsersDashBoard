import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { StartComponent } from './Components/start/start.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    StartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  URL="";
  constructor(private router:Router){
    this.router.events.subscribe({
      next:(data)=>{
        if(data.type.toString() == '1'){
          this.URL = data.toString();
        }
      }
    })
  }
  get Check_URL(){
    return this.URL.includes("url: '/'");
  }

}
