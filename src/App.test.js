import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

describe("App Component Test", () => {
  it("should display Hello Test", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(<App />, container);

    expect(container.textContent).toBe("Hello Test");

    unmountComponentAtNode(container); // remove element dom
  });
});
