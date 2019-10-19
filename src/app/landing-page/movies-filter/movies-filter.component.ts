import { Movie } from './../../models/movie.model';
import { LandingPageService } from './../../services/landing-page.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {
  dates: Date[] = [];
  movies: Movie[];
  formFilter = {
    date: new Date()
  };

  constructor(public _landingService: LandingPageService) { }

  ngOnInit() {
    this.createDates();
    $('select').formSelect();
    this.getMovies();
  }

  createDates() {
    for (let i = 0; i <= 7; i++) {
      const date: Date = new Date();
      date.setDate(date.getDate() + i);
      this.dates.push(date);
    }
  }

  getMovies() {
    this._landingService.getMovies().subscribe(movies => {
      this.movies = movies.filter(movie => movie.cartelera);
    });
  }

}
