import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  opts: number[] = [1.6, -2.44, 7.4, -0.81];
  dataset = [];

  ngOnInit() {
    this.calcolaDataset();
  }

  //Calcolo randomicamente un dataset di punti diversi utilizzando i parametri: res è la y e rnd1, rnd2, rnd3, rnd4 rispettivamente le x1, x2, x3, x4
  calcolaDataset() {
    this.dataset = [];
    for (let i = 0; i < 1000; i++) {
      const rnd1 = this.getRandomArbitrary(0, 10000);
      const rnd2 = this.getRandomArbitrary(0, 10000);
      const rnd3 = this.getRandomArbitrary(0, 10000);
      const rnd4 = this.getRandomArbitrary(0, 10000);

      const res =
        this.opts[0] * rnd1 +
        this.opts[1] * rnd2 +
        this.opts[2] * rnd3 +
        this.opts[3] * rnd4;

      this.dataset.push([rnd1, rnd2, rnd3, rnd4, res]);
    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  //funzione che dovrebbe fare la magia. sigma è la dev standard calcolata alla fine di ogni ciclo. Ora a questa funzione manca solo l'update dei vari start1, start2, start3, start4 che sono i 4 parametri che devo calcolare alla fine. Inizialmente faccio una stima uguale ad 1 per ognuno di loro. Mi manca a questo punto il modo di updatarli in maniera intelligente e non randomicamente
  macLea() {
    var sigma = 1;

    var start1 = 1;
    var start2 = 1;
    var start3 = 1;
    var start4 = 1;

    while (sigma > 0.1) {
      var diffSomma = 0;

      for (let data of this.dataset) {
        let diff =
          data[4] -
          data[0] * start1 +
          data[1] * start2 +
          data[2] * start3 +
          data[3] * start4;
        diffSomma += Math.pow(Math.abs(diff), 2);
      }

      sigma = Math.sqrt(diffSomma / this.dataset.length);

      //qua vanno updatati i parametri di start in modo da ottenere una sigma più piccola
    }
  }
}
