import renderer from "react-test-renderer";
import { it } from "vitest";
import App from "./App";

function validateTree(component) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result;
}

it("renders correctly", () => {
  const tree = validateTree(renderer.create(<App />));
  expect(tree).toMatchSnapshot();
});
