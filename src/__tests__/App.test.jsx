const { render } = require("@testing-library/react");
import React from "react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Jenkins</p>
      </header>
    </div>
  );
}

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Jenkins");
  expect(linkElement).toBeInTheDocument();
});
