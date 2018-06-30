import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-cv-main',
  templateUrl: './cv-main.component.html',
  styleUrls: ['./cv-main.component.css']
})
export class CvMainComponent implements OnInit {

  @ViewChild('menu') menu: ElementRef;
  @ViewChild('prehome') prehome: ElementRef;
  @ViewChild('sobre') sobre: ElementRef;
  pathFormated: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset;
      const componentPosition = this.prehome.nativeElement.offsetHeight;
      if (scrollPosition >= componentPosition - 60) {
        this.renderer.addClass(this.menu.nativeElement, 'fixed');
      } else {
        this.renderer.removeClass(this.menu.nativeElement, 'fixed');
      }
    }

    smoothScroll(e) {
      e.preventDefault();
      let element;
      if (e.target.href === undefined) {
        element = this.prehome;
      } else {
        const path = e.target.href.split('/#');
        switch (path[1]) {
          case 'sobre':
            element = this.sobre;
          break;
          case 'prehome':
            element = this.prehome;
          break;
        }
      }

      window.scroll({
        left: 0,
        top: element.nativeElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
}
