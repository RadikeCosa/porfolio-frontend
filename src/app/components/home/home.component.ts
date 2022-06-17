import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  miPorfolio: any;
  ramiro: any;
  constructor(private datosPorfolio: PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.miPorfolio = data;
      this.ramiro = this.miPorfolio[0];
      console.log(this.ramiro);
      console.log(this.ramiro.nombre);
    });
  }
}
