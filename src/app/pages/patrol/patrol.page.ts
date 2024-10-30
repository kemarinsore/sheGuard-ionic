import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { compass, reader, warning, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-patrol',
  templateUrl: './patrol.page.html',
  styleUrls: ['./patrol.page.scss'],
})
export class PatrolPage implements OnInit {

  constructor(
    private router: Router
  ) { 
    addIcons({ compass, reader, warning, notifications, person });
  }

  ngOnInit() {
  }

}
