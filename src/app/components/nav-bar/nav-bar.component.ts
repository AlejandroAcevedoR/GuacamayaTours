import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

h = document.getElementsByClassName('header');
l = document.getElementsByClassName('links');

  constructor() { }
  ngOnInit() {
  }

  night() {
    const expanded = this.h[0].getAttribute('aria-expanded') === 'true' || false;
    const t = !expanded;
    this.h[0].setAttribute('aria-expanded', t.toString() );
    this.l[0].setAttribute('aria-expanded', t.toString() );
  }

}
