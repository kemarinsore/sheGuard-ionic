import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.page.html',
  styleUrls: ['./set-up.page.scss'],
})
export class SetUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // Mulai aplikasi
  start() {
    console.log('Mulai aplikasi...');
    // Tambahkan logika untuk navigasi setelah pengguna menekan tombol "Mulai"
  }
}
