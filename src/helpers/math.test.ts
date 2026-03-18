import { describe, expect, test } from 'vitest';
import { add, subtract, multiply, divide } from './math';

describe( 'add (Suma)', () => {
    test('should add two positive numbers', () =>{
        //Arrange
        const valor1 = 10;
        const valor2 = 15;

        //Act
        const result = add(valor1, valor2);

        //Assert
        expect(result).toBe(valor1 + valor2);
    });

    test('should add two negative numbers', () => {
        //Arrange
        const valor1 = -5;
        const valor2 = -3;

        //Act
        const result = add(valor1, valor2);

        //Assert
        expect(result).toBe(valor1 + valor2);
    });
});