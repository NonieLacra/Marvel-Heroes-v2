import { Component } from '@angular/core';
import { Heroes } from 'src/app/interfaces/heroes';
import { Output, EventEmitter } from '@angular/core';
import { HEROES } from 'src/app/mock-data/mock-heroes';


@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {
  

  heroes = HEROES;

  selectedHero?: Heroes;

  onSelect(hero: Heroes): void {
  this.selectedHero = hero;
  }

  // @Output() newItemEvent = new EventEmitter<string>();

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
}
