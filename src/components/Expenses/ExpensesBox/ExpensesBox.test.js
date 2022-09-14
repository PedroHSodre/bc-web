import { render, screen } from "@testing-library/react";
import ExpensesBox from ".";

describe("expenses box", () => {
  it("should render", () => {
    const prefix = "R$ ";
    const invoicingValue = "50.000,00";
    render(<ExpensesBox value={invoicingValue} />);

    const container = screen.getByRole("expenseValue");
    expect(container.textContent).toBe(prefix + invoicingValue);
  });
});
