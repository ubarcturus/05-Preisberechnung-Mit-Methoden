/* eslint-disable max-classes-per-file */
class Einkauf {
  SCREW_FACTOR = 0.2;

  SCREW_NUT_FACTOR = 0.1;

  GROMMET_FACTOR = 0.05;

  screws = 0;

  screw_nuts = 0;

  grommets = 0;

  werteAuslesen() {
    this.screws = document.querySelector("#screws").value;
    this.screw_nuts = document.querySelector("#screw_nuts").value;
    this.grommets = document.querySelector("#grommets").value;
  }

  berechnen() {
    const result =
      this.screws * this.SCREW_FACTOR +
      this.screw_nuts * this.SCREW_NUT_FACTOR +
      this.grommets * this.GROMMET_FACTOR;

    return result.toLocaleString(undefined, { minimumFractionDigits: 2 });
  }
}

class Program {
  static start() {
    const einkauf = new Einkauf();
    einkauf.werteAuslesen();

    document.querySelector("#result").textContent = einkauf.berechnen();
  }
}

Program.start();
