import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "./Counter";

// setup test
let container = null;
beforeEach(() => {
  //arange
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.useFakeTimers();
});
describe("Counter Component ", () => {
  it("should be  'Count' ziro", () => {
    act(() => {
      render(<Counter />, container);
    });

    const countValue = document.querySelector("h1");
    expect(countValue.textContent).toBe("0");
  });

  it("should be click button increment count ", () => {
    act(() => {
      render(<Counter />, container);
    });

    const countValue = document.querySelector("h1");
    const buttonIncrement = document.querySelector(".increment");
    act(() => {
      buttonIncrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(countValue.textContent).toBe("1");
  });

  it("should be click button decrement count ", () => {
    act(() => {
      render(<Counter />, container);
    });

    const countValue = document.querySelector("h1");
    const buttonIncrement = document.querySelector(".decrement");
    act(() => {
      buttonIncrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(countValue.textContent).toBe("-1");
  });

  it("should be counter setCount period 5000 ms ", () => {
    act(() => {
      render(<Counter />, container);
    });

    const countValue = document.querySelector("h1");
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(countValue.textContent).toBe("1");
  });
});
afterEach(() => {
  jest.useRealTimers();
  unmountComponentAtNode(container); // remove element dom
});
