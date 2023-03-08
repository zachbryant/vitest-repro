import { vi, it, expect } from "vitest";
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import { Hello } from "./Hello";

vi.mock("./def.tsx", () => ({
  Def: () => <div>Def</div>,
  default: () => <div>Should not be called default in snapshot</div>,
}));

it("matches snapshot", () => {
  const shallowRender = ShallowRenderer.createRenderer();
  const result = shallowRender.render(<Hello />);
  expect(result).toMatchSnapshot();
});
