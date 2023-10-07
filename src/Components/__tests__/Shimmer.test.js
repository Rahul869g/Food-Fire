import { render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { allRestaurants } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(allRestaurants);
    }
  });
});

test("Search results on Homepage", async () => {
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
