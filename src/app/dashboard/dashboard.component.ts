import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
  }

}
