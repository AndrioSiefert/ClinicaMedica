
import { Paciente } from "./Paciente";


export class Random {
    public randomizacoes: { nome: string; precoPorIdade: number; data: string }[] = [];

    marcarDia(): void {
        for (let paciente of Paciente.listaPacientes) {
            const randomDia = Math.floor(Math.random() * 31) + 1;
            const randomMes = Math.floor(Math.random() * 12) + 1;
            const randomHora = Math.floor(Math.random() * 24);
            const randomMinuto = Math.floor(Math.random() * 60);

            const data = `${randomDia.toString().padStart(2, '0')}/${randomMes.toString().padStart(2, '0')}`;
            const hora = `${randomHora.toString().padStart(2, '0')}:${randomMinuto.toString().padStart(2, '0')}`;
            const precoPorIdade = paciente.precoPorIdade();


            const nomeExistente = this.randomizacoes.find(randomizacao => randomizacao.nome === paciente.nome);

            if (!nomeExistente) {
                this.randomizacoes.push({ nome: paciente.nome, precoPorIdade, data: `${data}, Horas: ${hora}` });
            }


        }
    }

    mostrarTodasRandomizacoes(): void {
        console.log("                        CALENDARIO DE CONSULTAS                        ");
        console.log("|----------------------|-----------------------|----------------------|");
        console.log("|   Nome do Paciente   |   Data e Horas        |   Valor da consulta  |");
        console.log("|----------------------|-----------------------|----------------------|");
        for (let randomizacao of this.randomizacoes) {
            console.log(`| ${randomizacao.nome.padEnd(20)} | ${randomizacao.data.padEnd(15)}   |        R$: ${randomizacao.precoPorIdade}       |`);
        }
        console.log("|----------------------|-----------------------|----------------------|");
    }
}