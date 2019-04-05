/**
 * Serviço da Calculadora
 * @author Thiago Soares Figueiredo
 * @since v1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = 'x';
  static readonly DIVISAO: string = '/';

  constructor() { }

  /**
   * Método que calcula operações matemáticas básicas
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser calculada
   * @return number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }
}
