import { Televisao } from "./Televisao";
const prompt = require("prompt-sync")({ sigint: true });

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export function calculator(operation: Operation, num1: number, num2: number): number {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            throw new Error('Operação inválida');
    }
}


function main() {
    const tv = new Televisao();
    while (true) {
        console.log(tv.getstatus());
        console.log("\nBem vindo ao seu Controle Remoto!!");
        console.log("\n");
        console.log("1. Se Deseja ligar a TV");
        console.log("2. Se desejar desligar a TV");
        console.log("3. Para aumentar o Volume");
        console.log("4. Para diminuir o Volume");
        console.log("5. Para mudar o Canal");
        console.log("6. APP Calculadora");
        console.log("7. Se quiser Sair");
        console.log("\n");

        const opcao = prompt("Digite a opção desejada: ");
        switch (opcao) {
            case "1":
                tv.ligarTV();
                break;
            case "2":
                tv.desligarTV();
                break;
            case "3":
                tv.aumentarVolumeTV();
                break;
            case "4":
                tv.diminuirVolumeTV();
                break;
            case "5":
                const canalStr = prompt("Informe o canal (1-999): ");
                const canal = parseInt(canalStr, 10);
                if (!isNaN(canal)) {
                    tv.mudarCanalTV(canal);
                } else {
                    console.log("Por favor, informe um número válido para o canal.");
                }
                break;
            case "6":
                const num1Str = prompt("Informe o primeiro número: ");
                const num1 = parseFloat(num1Str);
                const num2Str = prompt("Informe o segundo número: ");
                const num2 = parseFloat(num2Str);
                console.log("Escolha a operação:");
                console.log("1. Adição");
                console.log("2. Subtração");
                console.log("3. Multiplicação");
                console.log("4. Divisão");

                const operacao = prompt("Selecione uma operação: ");
                let operation: Operation;

                switch (operacao) {
                    case "1":
                        operation = 'add';
                        break;
                    case "2":
                        operation = 'subtract';
                        break;
                    case "3":
                        operation = 'multiply';
                        break;
                    case "4":
                        operation = 'divide';
                        break;
                    default:
                        console.log("Operação inválida.");
                        continue;
                }

                const resultado = calculator(operation, num1, num2);
                console.log(`Resultado: ${resultado}`);
                break;
            case "7":
                console.log("Encerrando o programa...");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

main();
