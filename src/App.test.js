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
  it("should display Hello Test", () => {
    //act
    act(() => {
      render(<App />, container);
    });

    //assert
    expect(container.textContent).toBe("Hello Test");
  });
});

afterEach(() => {
  unmountComponentAtNode(container); // remove element dom
});

// ACT => Full Load Document
