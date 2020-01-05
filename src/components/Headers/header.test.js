import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import HEADER from "./header";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<HEADER headerName="ward" />, container);
  });
  expect(container.textContent).toBe("ward How it works");
  act(() => {
    render(<HEADER headerName="management" />, container);
  });
  expect(container.textContent).toBe("management How it works");
});