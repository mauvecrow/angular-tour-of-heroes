import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.get4Heroes();
  }

  get4Heroes(): void {
    this.heroService.getHeroes().subscribe(observedHeroes => this.heroes = observedHeroes.slice(1,5));
  }

}
