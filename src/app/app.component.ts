import { Component, OnInit } from '@angular/core';
import { MovieService } from './service/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuOpened = false;
  listMovies = []

  constructor(private service: MovieService) { }


  ngOnInit() {
    this.getMovies();
  }

  getMovies = () => this.service.getAll().subscribe(retorno => this.listMovies = retorno);

  setMenuState(state: boolean) {
    this.menuOpened = state
  }

  closeMenu() {
    this.menuOpened = false
  }

}
