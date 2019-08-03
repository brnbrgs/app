import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {

  categoria: any;

  texto: any;
  image: any;
  description: any;

  items: any;
  
  constructor() { }

  ngOnInit() {
    this.getDestiny();
  }

  getCity() {
    this.items = [
      {name: "Dubasari", img: "assets/img/nature1.jpg", description: "Dubăsari ou Dubossary é uma cidade na Transnístria, com uma população de 23.650 habitantes. Reivindicada tanto pela República da Moldávia como pela República Moldava da Transnístria, a cidade está sob a administração desta última e funciona como a sede do Distrito de Dubăsari."},
      {name: "Chinisau", img: "assets/img/city1.jpg", description: "A capital da Moldávia que preserva mais heranças soviéticas na Europa, Chisinau (pronuncia-se Quichinau) é uma cidade bem pouco desenvolvida pros padrões do continente, mas que tem bastante vida e alegria."},
    ]
  }

  getDestiny() {
    this.items = [
      {name: "Old Orhei", img: "assets/img/destiny1.jpg", description: "Old Orhei é um complexo histórico e arqueológico da Moldávia localizado em Trebujeni, que é aproximadamente 60 km a nordeste de Chişinău no rio Răut na República da Moldávia."},
      {name: "Soroca Fort", img: "assets/img/destiny2.jpg", description: "A Fortaleza de Soroca é um forte histórico na República da Moldávia, na cidade moderna de Soroca."}
    ];
  }

  segmentChanged(ev: any) {

    this.categoria = ev.detail.value;

    if(this.categoria == "destiny") {

      this.getDestiny();

    }
    
    if(this.categoria == "cities") {

      this.getCity();

    }
  }
}
