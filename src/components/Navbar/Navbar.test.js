import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from ".";
import userEvent from "@testing-library/user-event";

describe("navbar component", () => {
  it("should render with welcomeMessage", () => {
    render(<Navbar />);

    const welcomeMessage = screen.getByRole("welcomeMessage");

    expect(welcomeMessage).toHaveTextContent("Hi Pedro...");
  });

  it("should navbar has to be for childrens", () => {
    render(<Navbar />);

    const navigation = screen.getByRole("navigation").childNodes;

    expect(navigation).toHaveLength(4);
  });

  it("should logout user", () => {
    render(<Navbar />);

    const logoutBtn = screen.getByRole("logoutBtn");

    userEvent.click(logoutBtn);

    expect(localStorage.getItem("acess_token")).not.toBeTruthy();
  });
});
