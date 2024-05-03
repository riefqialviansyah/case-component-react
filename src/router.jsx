import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
  },
]);

export default router;
