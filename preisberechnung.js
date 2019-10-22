class Einkauf {
    oneScrewPrice = 0.2;
    oneScrewNutPrice = 0.1;
    oneGrommetPrice = 0.05;

    screws = 0;
    screwNuts = 0;
    grommets = 0;

    werteAuslesen() {
        this.screws = document.querySelector('#screws').value;
        this.screwNuts = document.querySelector('#screwNuts').value;
        this.grommets = document.querySelector('#grommets').value;
    }

    berechnen(sum) {
        sum =
            this.screws * this.oneScrewPrice +
            this.screwNuts * this.oneScrewNutPrice +
            this.grommets * this.oneGrommetPrice;
        return sum;
    }

    ausgabe(sum) {
        this.berechnen();
        document.querySelector('#sum').textContent = sum;
    }
}
class start {
    start() {
        this.werteAuslesen();
        this.ausgabe();
    }
}
