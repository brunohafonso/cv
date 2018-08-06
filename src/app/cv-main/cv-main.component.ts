import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList, Renderer2, HostListener } from '@angular/core';
import {
  faFileCode,
  faLightbulb,
  faDatabase,
  faFileDownload,
  faPlus,
  faCommentAlt,
  faSpaceShuttle,
  faCode,
  faAlignRight,
  faMagic,
  faStopwatch,
  faCodeBranch,
  faRobot,
  faPhone,
  faAt
} from '@fortawesome/free-solid-svg-icons';
import { state, style, animate, transition, trigger } from '@angular/animations';
import { Contact } from './contact.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cv-main',
  templateUrl: './cv-main.component.html',
  styleUrls: ['./cv-main.component.css'],
  animations: [
    trigger('mostraEsconde', [
      state('inactive', style({
        transform: 'translate(250px)'
      })),
      state('active',   style({
        transform: 'translate(0px)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class CvMainComponent implements OnInit {

  // icones fon awesome
  faFileCode = faFileCode;
  faLightbulb = faLightbulb;
  faMagic = faMagic;
  faDatabase = faDatabase;
  faFileDownload = faFileDownload;
  faPlus = faPlus;
  faCommentAlt = faCommentAlt;
  faSpaceShuttle = faSpaceShuttle;
  faCode = faCode;
  faAlignRight = faAlignRight;
  faStopwatch = faStopwatch;
  faCodeBranch = faCodeBranch;
  faRobot = faRobot;
  faPhone = faPhone;
  faAt = faAt;

  // mostrar controles
  state = 'inactive';

  // mostrar botao controles
  show = false;

  contact = new Contact();
  contactForm: FormGroup;

  @ViewChild('menu') menu: ElementRef;
  @ViewChild('prehome') prehome: ElementRef;
  @ViewChild('sobre') sobre: ElementRef;
  @ViewChild('menuLinks') menuLinks: ElementRef;
  @ViewChild('skills') skills: ElementRef;
  @ViewChild('botaoControles') botaoControles: ElementRef;
  @ViewChild('portifolio') portifolio: ElementRef;
  @ViewChild('contato') contato: ElementRef;
  @ViewChildren('projectImage') projectImage: QueryList<ElementRef>;
  @ViewChild('footer') footer: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.mostrarBotao();
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset;
      const componentPosition = this.prehome.nativeElement.offsetHeight;
      this.mostrarBotao();
      this.lazyLoad();
      if (scrollPosition >= componentPosition - 60) {
        this.renderer.addClass(this.menu.nativeElement, 'fixed');
      } else {
        this.renderer.removeClass(this.menu.nativeElement, 'fixed');
        return false;
      }
    }

    mostrarBotao() {
      const scrollPosition = window.pageYOffset;
      const componentPosition = this.prehome.nativeElement.offsetHeight;
      if (scrollPosition >= componentPosition  - 300 && scrollPosition + 500 <= this.contato.nativeElement.offsetTop) {
        this.show = true;
      } else {
        this.show = false;
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
          case 'skills':
            element = this.skills;
          break;
          case 'portifolio':
            element = this.portifolio;
          break;
          case 'contato':
            element = this.contato;
          break;
        }
      }

      if (element !== this.prehome) {
        this.ativaDesativaMenu();
      }

      window.scroll({
        left: 0,
        top: element.nativeElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }

    ativarMenu() {
        if (this.menu.nativeElement.classList.contains('fixed')) {
            this.ativaDesativaMenu();
        } else {
          window.scroll({
            left: 0,
            top: this.sobre.nativeElement.offsetTop - 60,
            behavior: 'smooth'
          });
        }
    }

    ativaDesativaMenu() {
      if (this.menuLinks.nativeElement.classList.contains('visivel')) {
        this.menuLinks.nativeElement.classList.remove('visivel');
      } else {
        this.menuLinks.nativeElement.classList.add('visivel');
      }
    }

    toggleState() {
      this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    lazyLoad() {
      this.projectImage.map((img) => {
        console.log(img.nativeElement.dataset.url);
        if (window.pageYOffset >= this.portifolio.nativeElement.offsetTop - 60) {
          img.nativeElement.setAttribute('src', img.nativeElement.dataset.url);
        }
      });
    }

    submit() {
      alert(this.contact);
    }
}
