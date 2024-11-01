import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { compass, reader, warning, notifications, person } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private router: Router
  ) { 
    addIcons({ compass, reader, warning, notifications, person });
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }

  ngOnInit() {
  }

}
