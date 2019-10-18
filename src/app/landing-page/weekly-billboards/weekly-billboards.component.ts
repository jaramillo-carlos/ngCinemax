import { Movie } from './../../models/movie.model';
import { LandingPageService } from './../../services/landing-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-billboards',
  templateUrl: './weekly-billboards.component.html',
  styleUrls: ['./weekly-billboards.component.css']
})
export class WeeklyBillboardsComponent implements OnInit {
  movies: Movie[];
  constructor(public _landingService: LandingPageService) { }

  ngOnInit() {
    this.getWeeklyBillBoards();
  }

  getWeeklyBillBoards() {
    this._landingService.getMovies().subscribe( (movies: Movie[]) => {
      this.movies = movies.filter( (movie: Movie) => movie.cartelera );
    });
  }

}
