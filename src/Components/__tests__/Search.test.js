import { render, waitFor } from "@testing-library/react";
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

test("Search results on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);

  await waitFor(() => expect(body.getByTestId("search-container")));
  const resList = body.getByTestId("res-list");
  console.log(resList);
  expect(resList.innerHTML).toBe("Search");
});
