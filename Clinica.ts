export class Clinica {
    protected _sala: string;

    constructor() {
        const salas = ['A', 'B'];
        const random = Math.floor(Math.random() * salas.length);
        this._sala = salas[random];
    }

}
