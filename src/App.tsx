import { useRoutes } from "react-router-dom";
import { routes } from "./route";

const App = () => {
  const router = useRoutes(routes);
  return <>{router}</>;
};

export default App;
