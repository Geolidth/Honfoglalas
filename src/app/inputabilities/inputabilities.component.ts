import { Component } from '@angular/core';

interface Ability {
  name: string;
  level: number;
}

@Component({
  selector: 'app-inputabilities',
  templateUrl: './inputabilities.component.html',
  styleUrls: ['./inputabilities.component.css']
})
export class InputabilitiesComponent {
  ability!: string;
  level!: number;
  
  abilitiesData: { abilities: Ability[] } = {
    abilities: []
  };

  addAbility(name: string, level: number) {
    this.abilitiesData.abilities.push({ name, level });
  }
}
