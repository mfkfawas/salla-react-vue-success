import {
  defineCustomElements,
  AppCart,
  AppShipping,
  AppConfirmed
} from "react-library";

defineCustomElements();

function App() {
  if (window.location.pathname === "/" || window.location.pathname === "/cart")
    return <AppCart />;
  if (window.location.pathname === "/shipping") return <AppShipping />;
  if (window.location.pathname === "/confirmed") return <AppConfirmed />;
}

export default App;
