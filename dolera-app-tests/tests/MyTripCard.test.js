// BookCard.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import TripCard from "../components/TripCard";

//ICON TAVA DANDO WARNING ACT()

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation((msg) => {
    if (msg.includes("act(...)")) return;
    console.error(msg);
  });
});

describe("TripCard", () => {
  it("deve renderizar os dados passados como props", () => {
    const mockTrip = {
      name: "Amazônia 2026",
      currency: "Real",
      start: "10/01/2026",
      end: "20/01/2026",
      budget: "7000",
    };

    const { getByTestId } = render(
      <TripCard
        name={mockTrip.name}
        currency={mockTrip.currency}
        start={mockTrip.start}
        end={mockTrip.end}
        budget={mockTrip.budget}
      />
    );

    expect(getByTestId("CardInfo:name").props.children).toBe("Amazônia 2026");
    expect(getByTestId("CardInfo:currency").props.children[1]).toBe("Real");
    expect(getByTestId("CardInfo:start").props.children[1]).toBe("10/01/2026");
    expect(getByTestId("CardInfo:end").props.children[1]).toBe("20/01/2026");
    expect(getByTestId("CardInfo:budget").props.children[1]).toBe("7000");
  });
});
