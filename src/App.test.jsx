import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App"
const { render } = require("@testing-library/react");

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Jenkins deploy success");
  expect(linkElement).toBeInTheDocument();
});
