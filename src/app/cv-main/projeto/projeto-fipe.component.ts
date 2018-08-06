import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-projeto-fipe',
  templateUrl: './projeto-fipe.component.html',
  styleUrls: ['./projeto-fipe.component.min.css']
})
export class ProjetoFipeComponent implements OnInit {
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
