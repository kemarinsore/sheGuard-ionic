import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { compass, reader, warning, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(
    private router: Router
  ) { 
    addIcons({ compass, reader, warning, notifications, person });
  }

  ngOnInit() {
  }

}
