import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
@Input() rickAndMorty?: Character
}
