import { render, screen } from "@testing-library/react";
import InvoicingBox from ".";

describe("invoicement box", () => {
  it("should render", () => {
    const prefix = "R$ ";
    const invoicingValue = "50.000,00";
    render(<InvoicingBox value={invoicingValue} />);

    const container = screen.getByRole("invoicingValue");
    expect(container.textContent).toBe(prefix + invoicingValue);
  });
});
