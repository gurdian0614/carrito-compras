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

describe('subtract', () => {
  test('should subtract two positive numbers', () => {
    const a = 2;
    const b = 4;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
  test('should subtract two negative numbers', () => {
    const a = -2;
    const b = -4;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply two positive numbers', () => {
    const a = 2;
    const b = 4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test('should multiply two negative numbers', () => {
    const a = -2;
    const b = -4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});

describe('divide', () => {
  test('should divide two positive numbers', () => {
    const a = 2;
    const b = 4;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});