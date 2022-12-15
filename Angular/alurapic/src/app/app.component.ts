import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url:"http://pm1.narvii.com/8134/05481da521602f31f89f942eed3e6988263dda3cr1-500-500v2_uhq.jpg",
      description:"Jotaro"
    },
    {
      url:"https://i.pinimg.com/originals/4f/5b/5f/4f5b5f86f6e9967ddc544c864243c392.jpg",
      description:"Jolyne"
    }
  ]
}
