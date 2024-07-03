import { calculator } from './controleremoto';

export class Televisao {
    private statusLigada: boolean;
    private canal: number;
    private volumetv: number;

    constructor() {
        this.statusLigada = false;
        this.canal = 1;
        this.volumetv = 30;
    }

    ligarTV() {
        this.statusLigada = true;
        this.getstatus();
    }

    desligarTV() {
        this.statusLigada = false;
        this.getstatus();
    }

    aumentarVolumeTV() {
        if (this.statusLigada && this.volumetv < 100) {
            this.volumetv += 1;
        }
        this.getstatus();
    }

    diminuirVolumeTV() {
        if (this.statusLigada && this.volumetv > 0) {
            this.volumetv -= 1;
        }
        this.getstatus();
    }

    mudarCanalTV(novoCanal: number) {
        if (this.statusLigada && novoCanal > 0 && novoCanal <= 999) {
            this.canal = novoCanal;
        }
        this.getstatus();
    }

    private nomeCanal(canal: number): string {
        const canais: { [key: number]: string } = {
            13: "Globo            ",
            2:  "SBT               ",
            4:  "Band              ",
            9:  "Tribuna           ",
            11: "Canal Cultura    ",
            14: "Rede Brasil      ",
            7:  "MTV               ",
            22: "TV Nova Nordeste "
        };
        return canais[canal] || "Canal Desconhecido";
    }

    

    getstatus(): string {
        const statusLigada = `
            --------------------------------------------------
            |                                                |
            |         SMARTV FEITA POR RÔMULLO MOURA         |
            |                                                |
            |         Status TV: Ligada                      |
            |         Canal: ${this.canal} - ${this.nomeCanal(this.canal)}          |
            |         Volume: ${this.volumetv}                             |
            --------------------------------------------------
        `;

        const statusDesligada = `
            --------------------------------------------------
            |                                                |
            |         SMARTV FEITA POR RÔMULLO MOURA         |
            |                                                |
            |               Status TV: Desligada             |
            --------------------------------------------------
        `;

        return this.statusLigada ? statusLigada : statusDesligada;
    }
}

exports.Televisao = Televisao;

