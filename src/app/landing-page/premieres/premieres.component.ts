import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.css']
})
export class PremieresComponent implements OnInit {
  movies: Movie[];
  constructor(public _landingService: LandingPageService) { }

  ngOnInit() {
    this.getPremieres();
  }

  getPremieres() {
    this._landingService.getMovies().subscribe( (movies: Movie[]) => {
      this.movies = movies.filter( (movie: Movie) => !movie.cartelera );
    });
  }
}
