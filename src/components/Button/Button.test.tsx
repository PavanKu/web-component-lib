import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("renders a default button with text", async () => {
    const btnLabel = "Click Me";
    render(<Button label={btnLabel} />);

    expect(screen.getByText(btnLabel)).toBeInTheDocument();
  });

  test("renders a primary button", async () => {
    const btnLabel = "Click Me";
    render(<Button primary label={btnLabel} />);

    expect(screen.getByText(btnLabel)).toBeInTheDocument();
  });
  test("renders a button with custom colors", async () => {
    const btnLabel = "Click Me";
    render(<Button backgroundColor="#A78BFA" label={btnLabel} />);

    expect(screen.getByText(btnLabel)).toBeInTheDocument();
  });
  test("handles onClick", async () => {
    const btnLabel = "Click Me";
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} label={btnLabel} />);
    fireEvent.click(screen.getByText(btnLabel));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
