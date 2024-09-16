import Error from "./common/Error";
import Dashboard from "./pages/Dashboard";

export const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/*", element: <Error /> },
];
