import { Component, OnInit } from '@angular/core';

import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.min.css']
})
export class ProjetoComponent implements OnInit {

  faArrowCircleLeft = faArrowCircleLeft;

  constructor() { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
