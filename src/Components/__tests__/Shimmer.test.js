import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA)
  });
});

test("Search results on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  const shimmer = body.getByTestId("shimmer");
  // console.log(shimmer);
  expect(shimmer.children.length).toBe(8);
});
