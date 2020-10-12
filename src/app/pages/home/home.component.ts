import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  joke;
  chuckPicture = 'assets/chuck-static.png'
  constructor(private chuckS:ChuckService) { }

  async ngOnInit() {
    const result = await this.chuckS.getRdnJoke();
    console.log(result);
    this.joke = result.value;
  }
  async renewJoke(){
    const result = await this.chuckS.getRdnJoke();
    console.log(result);
    this.joke = result.value;
    this.chuckyes();
  }
  chucknope(){
    this.chuckPicture = 'assets/chuck-nope.gif'
  }
  chuckwarn(){
    this.chuckPicture = 'assets/chuck-warn.gif'
  }
  chuckyes(){
    this.chuckPicture = 'assets/chuck-yes.gif'
  }
}
