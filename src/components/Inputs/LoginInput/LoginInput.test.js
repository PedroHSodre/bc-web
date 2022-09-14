import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginInput from ".";
import userEvent from "@testing-library/user-event";

describe("inputs tests", () => {
  it("should input be in the document", () => {
    render(<LoginInput />);

    const input = screen.getByRole("input");

    expect(input).toBeInTheDocument();
  });

  it("should input be empty", () => {
    render(<LoginInput />);

    const input = screen.getByRole("input");

    expect(input).toBeInTheDocument();

    expect(input).toHaveValue("");
  });
});
