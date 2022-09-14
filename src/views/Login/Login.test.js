import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from ".";
import LoginInput from "../../components/Inputs/LoginInput";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("login page", () => {
  jest.mock("../../components/Inputs/LoginInput", (props) => {
    return jest.fn().mockImplementation(() => {
      return null;
    });
  });

  it('should be in the document a input with placeholder "Digite seu e-mail..."', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Digite seu e-mail...");

    const passwordInput = screen.getByPlaceholderText("Digite sua senha...");

    expect(emailInput).toBeInTheDocument();

    expect(passwordInput).toBeInTheDocument();
  });
});
