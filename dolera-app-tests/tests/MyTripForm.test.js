import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TripForm from "../components/TripForm";

describe("TripForm", () => {
  it("atualiza corretamente os campos com handleChange", () => {
    const { getByTestId } = render(<TripForm btnName="Criar" rota="/resumo" />);

    const nameInput = getByTestId("input-trip-name");
    const currencyInput = getByTestId("input-trip-currency");
    const startInput = getByTestId("input-trip-start");
    const endInput = getByTestId("input-trip-end");
    const budgetInput = getByTestId("input-trip-budget");

    fireEvent.changeText(nameInput, "Amazon 2026");
    fireEvent.changeText(currencyInput, "BRL");
    fireEvent.changeText(startInput, "02/10/2026");
    fireEvent.changeText(endInput, "02/20/2026");
    fireEvent.changeText(budgetInput, "8000");

    expect(nameInput.props.value).toBe("Amazon 2026");
    expect(currencyInput.props.value).toBe("BRL");
    expect(startInput.props.value).toBe("02/10/2026");
    expect(endInput.props.value).toBe("02/20/2026");
    expect(budgetInput.props.value).toBe("8000");
  });
});
