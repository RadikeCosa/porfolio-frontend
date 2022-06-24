import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css'],
})
export class SocialIconsComponent implements OnInit {
  miPorfolio: any;
  ramiro: any;
  constructor(private datosPorfolio: PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.miPorfolio = data;
      this.ramiro = this.miPorfolio[0];
    });
  }
}
