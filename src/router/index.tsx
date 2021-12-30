import { useRoutes } from "react-router";
import LoginPage from "../pages/LoginPage";
import TravelPage from "../pages/TravelPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <TravelPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ])
}