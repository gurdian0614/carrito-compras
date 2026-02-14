import type { BotonContadorProps } from "../interfaces/BotonContadorProps";

export const BotonContador: React.FC<BotonContadorProps> = ({
    incremento,
    decremento,
    cantidad,
}) => {
    return (
        <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed" onClick={decremento}>
                -
            </button>
            <span className="w-6 text-center font-semibold"> {cantidad} </span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600" onClick={incremento}>
                +
            </button>
        </div>
    );
};