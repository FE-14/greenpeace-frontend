import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import App from "./App";

describe("App component renders", () => {
  test("Check the heading", () => {
    render(<App />);
    const element = screen.getByRole("heading");

    expect(element).toBeInTheDocument();
  });

  test("The heading text should equals to 'App'", () => {
    render(<App />);
    const headingElement = screen.getByText("App");

    expect(headingElement.textContent).toEqual("App");
  });
});
