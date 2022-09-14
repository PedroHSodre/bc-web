import { render, screen } from "@testing-library/react";
import EmployesList from ".";

describe("employes list", () => {
  const empoyeList = [{ nome: "Lucas", horario: "10:05:00", status: "active" }];

  it("should render", () => {
    render(<EmployesList />);

    expect(EmployesList).toBeTruthy();
  });

  it("should have more than one employe", () => {
    render(<EmployesList data={empoyeList} />);

    const employe = screen.getAllByRole("employe");

    expect(EmployesList).toBeTruthy();

    expect(employe.length).toBeGreaterThanOrEqual(1);
  });
});
