import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/services/chuck.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesArray = [];
  catjoke="";
  constructor(private chuckS:ChuckService) { }

  async ngOnInit() {
    this.categoriesArray = await this.chuckS.getCategories();
  }
  async jokeFromCat(givenCat){
    console.log(givenCat);
    const result = await this.chuckS.getJokeFromCat(givenCat);
    console.log(result);

    this.catjoke = result.value;
  }
}
