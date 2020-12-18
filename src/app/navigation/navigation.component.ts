import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("banner").scrollIntoView({behavior:"smooth"});
  }
  toFeatures(){
    document.getElementById("feature").scrollIntoView({behavior:"smooth"})
  }
  toService(){
    document.getElementById("service").scrollIntoView({behavior:"smooth"})
  }
  toTestimonial(){
    document.getElementById("testimonial").scrollIntoView({behavior:"smooth"})
  }
  toContact(){
    document.getElementById("footer").scrollIntoView({behavior:"smooth"})
  }

}
