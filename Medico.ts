import { Clinica } from "./Clinica";
import { Paciente } from "./Paciente";

export class Medico extends Clinica {
    private _nome: string;
    private _crm: number;

    constructor(nome: string, crm: number) {
        super();
        this._nome = nome;
        this._crm = crm;
    }

    public get sala(): string {
        return this._sala;
    }

    public alaMedica(pacientes: Paciente[]): void {
        for (let paciente of pacientes) {
            if (paciente.sala === this.sala) {
                console.log(`Hoje o médico de Plantão ${this._nome} atenda na sala ${this.sala} do paciente ${paciente.nome} que está internado nesta sala!`);
                console.log('-'.repeat(65));

            }
        }
    }



}

