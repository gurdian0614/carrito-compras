import { useState } from "react";
import type { Contador } from "../interfaces/Contador";

const useContador = (valorInicial: number = 1): Contador => {

    const valorInicialSeguro = Math.max(1, valorInicial);
    const [contador, setContador] = useState<number>(valorInicialSeguro);

    const incremento = () => setContador(prev => prev + 1);
    const decremento = () => setContador(prev => (prev > 1 ? prev - 1 : 1));

    return {
        contador,
        incremento,
        decremento
    }

}

export default useContador;