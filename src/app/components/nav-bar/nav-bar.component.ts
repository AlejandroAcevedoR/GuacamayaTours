import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

h = document.getElementsByClassName('header');
l = document.getElementsByClassName('links');
b: boolean = true;
  constructor() { }
  ngOnInit() {
  }

  change(){
    if(this.b === true){
      document.body.style.backgroundColor = 'rgb(11, 21, 49)';
      this.b = !this.b;
    } else {
      document.body.style.backgroundColor = '#F8F1E5';
      this.b = !this.b;
    }
  }
  night() {
    const expanded = this.h[0].getAttribute('aria-expanded') === 'true' || false;
    const t = !expanded;
    this.h[0].setAttribute('aria-expanded', t.toString() );
    this.l[0].setAttribute('aria-expanded', t.toString() );
  }

}
