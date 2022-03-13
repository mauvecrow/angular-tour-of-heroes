import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    // assuming the id always exists, for now
    // error handling tbd
    const hero = HEROES.find(h => h.id == id)!;
    this.messageService.add(`HeroService: fetched hero id=${hero.id}`);
    return of(hero);
  }
}
