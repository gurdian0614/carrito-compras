import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Item } from "./Item";

describe("Item Component", () => {
    test('renderiza el nombre del producto y la cantidad incial', () => {
        render(<Item nombreProducto="Camisa Polo" cantidad={2} />);

        expect(screen.getByText('Camisa Polo')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });
});