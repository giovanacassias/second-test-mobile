import MyButton from "./components/MyButton";
import { render, fireEvent } from "@testing-library/react-native";

//TESTE PARA VER SE BOTÃO ESTÁ CHAMANDO A FUNÇÃO NO ONPRESS

describe("MyButton", () => {
  it("calls onPress function when the button is pressed", () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(<MyButton onPress={mockOnPress} />);
    const pressMeButton = getByTestId("MyButton:Button:ClickMe");
    fireEvent.press(pressMeButton);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
