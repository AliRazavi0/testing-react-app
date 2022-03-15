import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello Component Test", () => {
  it("should load component Hello", () => {
    render(<Hello />);
    screen.debug();
  });
});
