import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }

  ngOnInit() {
  }

}
