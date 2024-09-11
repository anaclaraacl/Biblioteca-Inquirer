"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    let arrayNumeros = [];
    for (let i = 0; i < 10; i++) {
        const numero = parseFloat(yield (0, prompts_1.input)({ message: "Por favor, digite um número:" }));
        arrayNumeros.push(numero);
    }
    console.log("Array:", arrayNumeros);
    let quantPares = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0) {
            quantPares++;
        }
    }
    console.log("Existem", quantPares, "números pares digitados");
    let valoresPares = [];
    let somaPares = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        valoresPares.push(arrayNumeros[i]);
        if (arrayNumeros[i] % 2 == 0) {
            somaPares += valoresPares[i];
        }
    }
    console.log("A soma deles é:", somaPares);
    let media = somaPares / quantPares;
    console.log("A média dos números pares digitados pelo usuário é:", media);
}))();
