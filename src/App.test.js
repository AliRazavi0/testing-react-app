import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

// setup test
let container = null;
beforeEach(() => {
  //arange
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("App Component Test", () => {
  it("should display greating message", () => {
    //act
    act(() => {
      render(<App />, container);
    });

    //assert
    expect(container.textContent).toBe("Hello ");
  });

  it("should display greating by name", () => {
    act(() => {
      render(<App name="Ali" />, container);
      expect(container.textContent).toBe("Hello Ali");
    });
  });
});

afterEach(() => {
  unmountComponentAtNode(container); // remove element dom
});

// ACT => Full Load Document
