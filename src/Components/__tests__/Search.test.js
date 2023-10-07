import "@testing-library/jest-dom";

import { render, waitFor, screen } from "@testing-library/react";
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

  await waitFor(() => {
    return expect(screen.getByTestId("search-btn"));
  });
  const searchBtn = body.getByTestId("search-btn");
  const resList = body.getByTestId("res-list");
  console.log(searchBtn);
  // console.log(resList);
  expect(resList).toBeInTheDocument();
});
