import { render, screen } from "@testing-library/react";
import CompanyCapitalBox from ".";

describe("company capital box", () => {
  it("should render", () => {
    const prefix = "R$ ";
    const invoicingValue = "50.000,00";
    render(<CompanyCapitalBox value={invoicingValue} />);

    const container = screen.getByRole("companyCapitalValue");
    expect(container.textContent).toBe(prefix + invoicingValue);
  });
});
