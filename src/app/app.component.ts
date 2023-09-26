import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { Character } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  public rickmorty: Character[] = []
  constructor(private dataServ: DataService){
    this.loadAPI()
  }

  loadAPI(){
    this.dataServ.getAPI().subscribe({
      next: data => this.rickmorty = data.results,
      error: err => console.log('errore', err)
    })
  }
}
