import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("App Component Test", () => {
  it("should display Hello Test", () => {
    //arange
    const container = document.createElement("div");
    document.body.appendChild(container);
    //act
    act(() => {
      render(<App />, container);
    });

    //assert
    expect(container.textContent).toBe("Hello Test");

    unmountComponentAtNode(container); // remove element dom
  });
});

// ACT => Full Load Document
