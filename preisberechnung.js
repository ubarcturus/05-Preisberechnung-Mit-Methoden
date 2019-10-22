/* eslint-disable max-classes-per-file */

const PRICE_FOR_ONE_GROMMET = 0.05,
  PRICE_FOR_ONE_SCREW = 0.2,
  PRICE_FOR_ONE_SCREW_NUT = 0.1;

class Einkauf {
  screws;

  screwNuts;

  grommets;

  werteAuslesen() {
    this.screws = document.querySelector("#screws").value;
    this.screwNuts = document.querySelector("#screwNuts").value;
    this.grommets = document.querySelector("#grommets").value;
  }

  berechnen() {
    const sum =
      this.screws * PRICE_FOR_ONE_SCREW +
      this.screwNuts * PRICE_FOR_ONE_SCREW_NUT +
      this.grommets * PRICE_FOR_ONE_GROMMET;
    return sum;
  }

  ausgabe() {
    document.querySelector("#sum").textContent = this.berechnen();
  }
}
class Start {
  static start() {
    const einkauf = new Einkauf();
    einkauf.werteAuslesen();
    einkauf.ausgabe();
  }
}

// () => Start.start;

Start.start();
