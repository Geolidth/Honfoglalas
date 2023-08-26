import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-char-page',
  templateUrl: './char-page.component.html',
  styleUrls: ['./char-page.component.css']
})
export class CharPageComponent implements OnInit {
  char: any[] = [];
  equip: any[] = [];
  state: any[] = [];
  clickedValue: string = '';
  clickedRowIndex: number = -1;
  use: any[] = [];
  sum: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadChar();
    this.loadEquip();
    this.loadStates();
    this.loadUse();
  }

  loadChar() {
    this.http.get<any[]>('../assets/glazo.json').subscribe((data: any[]) => {
      this.char = data;
      console.log(data);
    });
  }
  loadEquip() {
    this.http.get<any[]>('../assets/glazo.equipment.json').subscribe((data: any[]) => {
      this.equip = data;
      console.log(data);
    });
  }
  loadStates() {
    this.http.get<any[]>('../assets/states.json').subscribe((data: any[]) => {
      this.state = data;
    });
  }
  loadUse() {
    this.http.get<any[]>('../assets/glazo.json').subscribe((data: any[]) => {
      this.use = data;
    });
  }
  incrementSecondField(rowIndex: number) {
    this.use[rowIndex].use++;
    this.clickedRowIndex = rowIndex;
  }
  summarum() {
    this.sum = this.use.reduce((total, item) => total + item.use, 0);
    this.save();
  }
  save() {
    const currentTime = new Date().toLocaleString('hu-HU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const usageDataArray = this.use.map((skill, index) => {
      const skillName = skill.name;
      const skillUsage = this.use[index]?.use || 0;
      return `${skillName}: \t\t ${skillUsage} használat \t\t ${skillUsage}/${this.sum}`;
    });
    const usageText = `${currentTime}\n${usageDataArray.join('\n')}`;
    
    const blob = new Blob([usageText], { type: 'text/plain;charset=utf-8' });
    fileSaver.saveAs(blob, 'skills_usage.txt');
  }
  
  
  reset(){
    this.use.forEach(element => {
      element.use=0;
    });
  }
  
}
