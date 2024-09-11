import { input } from "@inquirer/prompts";

(async () => {
    let arrayNumeros:number[] = [];

    for (let i = 0; i < 10; i++) {
		const numero: number = parseFloat(await input({ message: "Por favor, digite um número:" }));
		arrayNumeros.push(numero);
	}
    console.log("Array:", arrayNumeros)

    let quantPares = 0;
    for (let i = 0; i < arrayNumeros.length; i++){
        if (arrayNumeros[i] % 2 == 0) {
            quantPares++
        }
    }
    console.log("Existem",quantPares,"números pares digitados")


    let valoresPares: number[] = [];
    let somaPares = 0;
    for (let i = 0; i < arrayNumeros.length; i++){
        valoresPares.push(arrayNumeros[i])
        if (arrayNumeros[i] % 2 == 0) {
            somaPares += valoresPares[i]
        }
    }
    console.log("A soma deles é:",somaPares)

    let media = somaPares / quantPares;
    console.log("A média dos números pares digitados pelo usuário é:", media)

})();