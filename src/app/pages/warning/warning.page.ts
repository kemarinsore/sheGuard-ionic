import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { compass, reader, warning, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.page.html',
  styleUrls: ['./warning.page.scss'],
})
export class WarningPage implements OnInit {

  constructor(
    private router: Router
  ) { 
    addIcons({ compass, reader, warning, notifications, person });
  }

  ngOnInit() {
  }

}
