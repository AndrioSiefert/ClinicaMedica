import prompt from 'prompt-sync';
import { Paciente } from './Paciente';
import { Random } from './Random';
import { Medico } from './Medico';

const teclado = prompt();



const medico: Medico[] = [
    new Medico("Dr. João", 1234),
    new Medico("Dr. Maria", 5678),
    new Medico("Dr. Rodolfo", 5012),
    new Medico("Dr. Kristiane", 6012),
    new Medico("Dr. Angelo", 2012),
    new Medico("Dr. Reydecio", 2312),
];
let pacientes = Paciente.listaPacientes
let randomDH = new Random();
let paciente: Paciente = new Paciente();








let sair: boolean = false;
while (!sair) {
    console.log(`╔═══════════════════════════════════════════╗`);
    console.log(`║ 1. CADASTRO DE PACIENTE                   ║`);
    console.log(`║ 2. MOSTRAR BANCO DE DADOS DOS PACIENTES   ║`);
    console.log(`║ 3. CALENDARIO DOS PACIENTES               ║`);
    console.log(`║ 4. PLANTÃO MÉDICO                         ║`);
    console.log(`║ 5. SAIR DO PROGRAMA                       ║`);
    console.log(`╚═══════════════════════════════════════════╝`);
    console.log();


    let option = +teclado("Escolha uma Opção: ");
    console.log('-'.repeat(65));

    switch (option) {
        case 1:
            paciente.cadastrarPaciente();
            randomDH.marcarDia();
            break;
        case 2:
            paciente.mostrarPacientes();
            break;
        case 3:
            randomDH.mostrarTodasRandomizacoes()
            break;
        case 4: ;
            const medicoAleatorio = medico[Math.floor(Math.random() * medico.length)];
            medicoAleatorio.alaMedica(pacientes);
            break;
        case 5:
            console.log("Saindo...");
            sair = true;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}