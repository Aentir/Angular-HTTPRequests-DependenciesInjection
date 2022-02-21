import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  
  public links: any[] = [
    {
      url: "/spain",
      name: "España"
    },
    {
      url: "/france",
      name: "Francia"
    },
    {
      url: "/portugal",
      name: "Portugal"
    },
    {
      url: "/germany",
      name: "Alemania"
    }];

    
  ngOnInit(): void {
  }

}
