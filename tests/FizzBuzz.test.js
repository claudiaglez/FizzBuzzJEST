// Imports
const {expect} = require("@jest/globals");
const FizzBuzz = require("../FizzBuzz")

/**
     * Feature para saber cuando un número es primo de 3 y de 5
    * 1.Cuando el usuario digite un número divisible por 3, devuelve Fizz,
    * 2.Cuando el usuario digite un número divisible por 5, devuelve Buzz,
    * 3.Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz,
    * 4.Cuando el usuario digite un número no divisible por 3 y 5, devuelve el número,
 */

const fizz_buzz = new FizzBuzz(); // La clase se hace global para todo el documento

describe ('Tests que validan los múltiplos de 3 y 5', () => {

    test('Test devuelve Fizz cuando divisible por 3', () => {
        /**
         * GHERKING TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 3
            * THEN / ASSERT: devuelve Fizz como resultado
         */
    
        // ARRANGE: preparar el escenario (las entradas que quiero dar y las salidas que espero)
        const numero_ingresado = 3;
        const respuesta_esperada = "Fizz";


        // ACT: ejecuta el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        // ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    });

    test('Test devuelve Buzz cuando divisible por 5', () => {
        /**
         * GHERKING TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 5
            * THEN / ASSERT: devuelve Buzz como resultado
         */
    
        // ARRANGE: preparar el escenario (las entradas que quiero dar y las salidas que espero)
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";


        // ACT: ejecuta el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        // ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    });

    test('Test devuelve FizzBuzz cuando divisible por 3 y 5', () => {
        /**
         * GHERKING TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 3 y 5
            * THEN / ASSERT: devuelve FizzBuzz como resultado
         */
    
        // ARRANGE: preparar el escenario (las entradas que quiero dar y las salidas que espero)
        const numero_ingresado = 15;
        const respuesta_esperada = "FizzBuzz";


        // ACT: ejecuta el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        // ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    });

})