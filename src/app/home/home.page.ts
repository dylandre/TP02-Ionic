import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;

  constructor() {}

  updateTitle() {
    this.title = 'Mon Nouveau Titre';
  }

  PasTester() {
    this.title = 'A Tester !';
  }
}
