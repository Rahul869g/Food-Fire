import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log("🚀 ~ file: Header.test.js:6 ~ test ~ header:", header);

  const logo = header.getByTestId("logo");
  // console.log("🚀 ~ file: Header.test.js:18 ~ test ~ logo̥:", logo);
  expect(logo.src).toBe("http://localhost/dummy.png");
});

test("Online status should be green when rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toMatch("🟢");
});

test("Cart Items should be 0 when rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartLength = header.getByTestId("cart-length");
  expect(cartLength.innerHTML).toBe("Cart 0");
});
