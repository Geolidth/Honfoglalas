import { Component } from '@angular/core';
import * as fileSaver from 'file-saver';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-karaktergen',
  templateUrl: './karaktergen.component.html',
  styleUrls: ['./karaktergen.component.css']
})
export class KaraktergenComponent {

  nevezes!: string;
  szarmazas!: string;
  nyelvek!: string;
  kinezet!: string;
  jellemzo!: string;
  negyes!: string;
  harmas1!: string;
  harmas2!: string;
  kettes1!: string;
  kettes2!: string;
  kettes3!: string;
  egyes1!: string;
  egyes2!: string;
  egyes3!: string;
  egyes4!: string;
  egyes5!: string;
  targy1!: string;
  db1!: string;
  targy2!: string;
  db2!: string;

  savechar() {
    const dataChar={abilities:[
      {"name":this.negyes,"level":4},
      {"name":this.harmas1,"level":3},
      {"name":this.harmas2, "level":3}
    ]};
    const charData = {
      nevezes: this.nevezes,
      szarmazas: this.szarmazas,
      nyelvek: this.nyelvek,
      kinezet: this.kinezet,
      jellemzo: this.jellemzo,
      negyes: this.negyes,
      harmas1: this.harmas1,
      harmas2: this.harmas2,
      kettes1: this.kettes1,
      kettes2: this.kettes2,
      kettes3: this.kettes3,
      egyes1: this.egyes1,
      egyes2: this.egyes2,
      egyes3: this.egyes3,
      egyes4: this.egyes4,
      egyes5: this.egyes5,
      targy1: this.targy1,
      db1: this.db1,
      targy2: this.targy2,
      db2: this.db2

    };
    console.log(charData);
    console.log(dataChar);
    const dataJson=JSON.stringify(dataChar);
    const jsonData = JSON.stringify(charData);
    const bolb = new Blob([dataJson], { type: 'text/plain;charset=utf-8' });
    fileSaver.saveAs(bolb,'example.json');
    const blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8' });
    fileSaver.saveAs(blob, 'karakterlap.txt');

    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.setTextColor(0, 0, 255);
    pdf.text('Karakter Adatok', 10, 10);

    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text('JSON adatok:', 10, 20);

    // Szöveg tördelése és automatikus sortörés
    const textLines = pdf.splitTextToSize(JSON.stringify(charData), 180);
    pdf.text(textLines, 10, 30);

    pdf.save('character-data.pdf');
  }
}
