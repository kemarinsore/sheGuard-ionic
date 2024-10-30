import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { compass, reader, warning, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-panic',
  templateUrl: './panic.page.html',
  styleUrls: ['./panic.page.scss'],
})
export class PanicPage implements OnInit {

  constructor(
    private router: Router
  ) { 
    addIcons({ compass, reader, warning, notifications, person });
  }
  
  ngOnInit() {
  }

}
