import prompt from "prompt-sync";
import { Clinica } from "./Clinica";

const teclado = prompt();



export class Paciente extends Clinica {
    private _nome: string;
    private _idade: number;
    private _cpf: string;

    constructor() {
        super();
        this._nome = ""
        this._idade = 0
        this._cpf = ""
    }

    public get nome(): string {
        return this._nome;
    }

    public get sala(): string {
        return this._sala;
    }

    public get idade(): number {
        return this._idade;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public static listaPacientes: Paciente[] = [];

    public cadastrarPaciente(): void {
        console.log("Informe os dados do paciente:");

        const nome = teclado("Nome: ");
        const idade = +teclado("Idade: ");
        const cpf = teclado("CPF: ");
        const sala = teclado("Sala: ");

        let novoPaciente: Paciente = new Paciente();
        novoPaciente._nome = nome;
        novoPaciente._idade = idade;
        novoPaciente._cpf = cpf;
        novoPaciente._sala = sala
        Paciente.listaPacientes.push(novoPaciente);

        console.log("Paciente adicionado com sucesso!");

        return;
    }



    public mostrarPacientes(): void {
        console.log("LISTA DE PACIENTES:");
        for (let paciente of Paciente.listaPacientes) {
            console.log(`Nome: ${paciente._nome}`);
            console.log(`Idade: ${paciente._idade}`);
            console.log(`CPF: ${paciente._cpf}`);
            console.log(`Sala: ${paciente._sala}`);
            console.log("-------------------------");
        }
    }

    public precoPorIdade(): number {
        if (this._idade <= 18) {
            return 300;
        } else if (this._idade > 18 && this._idade <= 40) {
            return 600;
        } else if (this._idade > 40) {
            return 900;
        }
        return 0;
    }




}

