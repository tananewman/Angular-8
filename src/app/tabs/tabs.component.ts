import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public characters = [
    {
      name: 'Luke Skywalker',
      side: ''
    },
    {
      name: 'Darth Vader',
      side: ''
    }
  ];

  private chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  public onChoose(side) {
    this.chosenList = side;
  }

  public getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter(char => {
      return char.side === this.chosenList;
    });
  }
}
