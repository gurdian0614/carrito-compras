import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { BotonContador } from "./BotonContador";

describe("BotonContador Component", () => {
    test('Muestra la cantidad correcta', () => {
        render(<BotonContador cantidad={5} incremento={vi.fn()} decremento={vi.fn()} />);

        // Validamos que el numero 5 esté presente en la pantalla
        expect(screen.getByText("5")).toBeInTheDocument();
    });
});